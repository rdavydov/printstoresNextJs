import React, { useState } from "react";
import { Form, Input, Modal } from "antd";
import UploadFile from "reusable-components/UploadFile/UploadFile";

interface IProps {
    visible: boolean;
    onCreate: (values) => void;
    onCancel: () => void;
}

const CategoryForm: React.FC<IProps> = ({ onCancel, onCreate, visible }) => {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);

    const onSumbit = (value) => {
        onCreate(value);
        setFileList([]);
    };
    return (
        <Modal
            visible={visible}
            title="Создание новой категории"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form.validateFields()
                    .then((values) => {
                        form.resetFields();
                        onSumbit(values);
                    })
                    .catch((info) => {
                        console.log("Validate Failed:", info);
                    });
            }}
            centered
        >
            <Form form={form} layout="vertical">
                <Form.Item
                    name="name"
                    label="Название категории"
                    rules={[
                        {
                            required: true,
                            message: "Please input the title of collection!",
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="key"
                    label="Ключ категории"
                    rules={[
                        {
                            required: true,
                            pattern: new RegExp(/[A-za-z]/),
                            message:
                                "Введите ключ категории(Только английские)",
                        },
                    ]}
                    hasFeedback
                >
                    <Input type="textarea" />
                </Form.Item>
                <UploadFile fieldKey="image" form={form} fileList={fileList} />
            </Form>
        </Modal>
    );
};

export default CategoryForm;
