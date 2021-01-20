import { Form, Modal } from "antd";
import { ModalContext } from "context/ModalContext";
import React, { useContext, useMemo, useState, memo } from "react";
import { useDispatch } from "react-redux";
import { fetchCreateCategory } from "store/admin/admin-category-reducer/extraReducers/extraReducers";
import { fetchCreateProduct } from "store/admin/admin-product-reducer.ts/extraReducers/extraReducers";
import CategoryFormStep from "./category-form-step/category-form";
import ProductForm from "./product-form-step/product-form-step";

const START_STEP = 1;
const MAX_STEP = 2;

const ProductStepFormContainer = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [state, setState] = useState({
        step: START_STEP,
        createMode: false,
        final: false,
    });
    const { visible, handleCloseModal } = useContext(ModalContext);

    const handleCreate = async () => {
        const { category, product } = form.getFieldsValue([
            "category",
            "product",
        ]);
        try {
            dispatch(fetchCreateCategory(category));
            dispatch(fetchCreateProduct(product));
            refreshFieldsAndCloseModal();
            Modal.success({
                title: "Успешно создали товар",
                centered: true,
            });
        } catch (e) {
            Modal.success({
                title: e.response.data,
                centered: true,
            });
        }
    };

    const handleCreateCategory = () => {
        setState((prev) => ({ ...prev, createMode: true }));
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
        setState({ step: START_STEP, createMode: false, final: false });
        form.resetFields();
        handleCloseModal();
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
                        createMode={state.createMode}
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

    const createModalProps = (step) => {
        const title =
            step === START_STEP ? "Выбор категории товара" : "Создание товара";
        const okText =
            step === 2 && !state.final
                ? "Создать"
                : state.final
                ? "Создаю..."
                : "Далее";
        const cancelText = step === START_STEP ? "Отмена" : "Назад";
        const cancelButtonProps = {
            onClick: step === START_STEP ? handleClose : handleBack,
            disabled: state.final,
        };
        const bodyStyle = { minHeight: 150 };
        const maskClosable = false;
        const confirmLoading = state.final;
        return {
            title,
            okText,
            cancelText,
            cancelButtonProps,
            bodyStyle,
            maskClosable,
            confirmLoading,
        };
    };

    const modalProps = useMemo(() => createModalProps(state.step), [
        state.step,
        state.final,
    ]);

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
