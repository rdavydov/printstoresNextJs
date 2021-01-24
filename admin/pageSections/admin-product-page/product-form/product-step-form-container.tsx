import { Form, Modal } from "antd";
import React, { useMemo, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCloseModal } from "store/admin/admin-modal-reducer.ts/actionCreaters/moda-action-creaters";
import { RootState } from "store/rootReducer";
import { createCategory } from "../utils/category-create.utils";
import { createProduct } from "../utils/product-create.utils";
import CategoryFormStep from "./category-form-step/category-form";
import ProductForm from "./product-form-step/product-form-step";
import { createModalProps } from "./utils/createModalProps";

const START_STEP = 1;
const MAX_STEP = 2;

const ProductStepFormContainer = () => {
    const { visible } = useSelector((state: RootState) => state.modal);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [state, setState] = useState({
        step: START_STEP,
        createCategoryMode: false,
        final: false,
    });

    const handleCreate = async () => {
        const { category, product } = form.getFieldsValue([
            "category",
            "product",
        ]);
        try {
            if (state.createCategoryMode) {
                await createCategory(category);
            }
            await createProduct(product);
            refreshFieldsAndCloseModal();
            Modal.success({
                title: "Успешно создали товар",
                centered: true,
            });
        } catch (e) {
            const { message } = e.response.data;
            setState((prev) => ({ ...prev, final: false, step: 1 }));
            Modal.error({
                title: message,
                centered: true,
            });
        }
    };

    const handleCreateCategory = () => {
        setState((prev) => ({ ...prev, createCategoryMode: true }));
    };

    const handleBack = () => {
        setState((prev) => ({
            ...prev,
            step: state.step === START_STEP ? START_STEP : state.step - 1,
        }));
    };

    const onSubmit = async () => {
        await form.validateFields();
        if (state.step === MAX_STEP) {
            setState((prev) => ({ ...prev, final: true }));
            await handleCreate();
        } else {
            setState((prev) => ({
                ...prev,
                step: state.step === MAX_STEP ? MAX_STEP : state.step + 1,
            }));
        }
    };

    const refreshFieldsAndCloseModal = () => {
        setState({ step: START_STEP, createCategoryMode: false, final: false });
        form.resetFields();
        dispatch(handleCloseModal());
    };

    const handleClose = () => {
        refreshFieldsAndCloseModal();
    };

    const closableFormClose = () => {
        refreshFieldsAndCloseModal();
    };

    const stepContainer = () => {
        switch (state.step) {
            case 1: {
                return (
                    <CategoryFormStep
                        form={form}
                        handleCreateCategory={handleCreateCategory}
                        createMode={state.createCategoryMode}
                    />
                );
            }
            case 2: {
                return (
                    <ProductForm
                        form={form}
                        category={form.getFieldValue(["category", "key"])}
                    />
                );
            }
        }
    };

    const modalProps = useMemo(
        () => createModalProps({ state, handleBack, handleClose }),
        [state.step, state.final, state.createCategoryMode]
    );
    return (
        <Modal
            {...modalProps}
            visible={visible}
            onOk={onSubmit}
            onCancel={closableFormClose}
            destroyOnClose
            centered
        >
            <Form form={form}>{stepContainer()}</Form>
        </Modal>
    );
};

export default memo(ProductStepFormContainer);
