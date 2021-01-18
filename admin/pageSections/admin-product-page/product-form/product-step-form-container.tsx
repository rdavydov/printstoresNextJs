import { Form } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import CategoryFormByCreateMode from "./category-form";
import ProductForm from "./product-form";

const START_STEP = 1;
const MAX_STEP = 3;

interface IProps {
    visible: boolean;
    onCreate: (values) => void;
    onCancel: () => void;
}

const ProductStepFormContainer: React.FC<IProps> = ({
    visible,
    onCreate,
    onCancel,
}) => {
    const [form] = Form.useForm();
    const [state, setState] = useState({
        step: START_STEP,
    });

    const [category, setCategory] = useState({
        createMode: false,
        fields: ["mug", "undershirt"],
        name: "",
    });

    const onSubmit = async () => {
        try {
            await form.validateFields();
            setState((prev) => ({
                ...prev,
                step: state.step === MAX_STEP ? MAX_STEP : state.step + 1,
            }));
        } catch (e) {
            console.log("Validate Failed:", e);
        }
    };

    const handleClose = () => {
        onCancel();
    };

    const handleBack = () => {
        setState((prev) => ({
            ...prev,
            step: state.step === START_STEP ? START_STEP : state.step - 1,
        }));
    };
    const stepContainer = () => {
        switch (state.step) {
            case 1: {
                return <CategoryFormByCreateMode />;
            }
            case 2: {
                return <ProductForm />;
            }
        }
    };

    return (
        <Modal
            visible={visible}
            onOk={onSubmit}
            onCancel={handleClose}
            title={
                state.step === 1
                    ? "Выбор категории товара"
                    : "Создание категории товара"
            }
            width={category.createMode ? "60%" : "30%"}
            okText="Далее"
            cancelText={state.step === 1 ? "Отмена" : "Назад"}
            maskClosable={false}
            cancelButtonProps={{
                onClick: state.step === START_STEP ? handleClose : handleBack,
            }}
            centered
        >
            <Form form={form}>{stepContainer()}</Form>
        </Modal>
    );
};

export default ProductStepFormContainer;
