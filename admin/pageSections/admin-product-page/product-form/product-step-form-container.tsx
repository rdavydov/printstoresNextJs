import { Form, Modal } from "antd";
import { ModalContext } from "context/ModalContext";
import React, { useContext, useMemo, useState } from "react";
import CategoryFormStep from "./category-form-step/category-form";
import ProductForm from "./product-form-step/product-form-step";

const START_STEP = 1;
const MAX_STEP = 2;

interface IProps {
    onCreate: (values) => void;
}

const ProductStepFormContainer: React.FC<IProps> = ({ onCreate }) => {
    const [form] = Form.useForm();
    const [state, setState] = useState({
        step: START_STEP,
        createMode: false,
        final: false,
    });
    const { visible, handleCloseModal } = useContext(ModalContext);

    const handleCreate = async () => {
        setTimeout(() => {
            refreshFieldsAndCloseModal();
            Modal.success({
                title: "Успешно создали товар",
                centered: true,
            });
        }, 5000);
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
        const okText = step === 2 ? "Создать" : "Далее";
        const cancelText = step === START_STEP ? "Отмена" : "Назад";
        const cancelButtonProps = {
            onClick: step === START_STEP ? handleClose : handleBack,
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
    console.log(modalProps, "props-modal");

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

export default ProductStepFormContainer;
