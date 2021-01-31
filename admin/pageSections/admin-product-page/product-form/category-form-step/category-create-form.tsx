import { Col, Form, Input, Row } from "antd";
import { FormInstance } from "antd/lib/form";
import { UploadFile } from "components/common";
import React, { useState } from "react";

interface IProps {
    form: FormInstance;
}

const CategoryCreateForm: React.FC<IProps> = ({ form }) => {
    const handleChangeCategory = ({ target: { value } }) => {
        form.setFieldsValue({ product: { key: value } });
    };

    return (
        <Row gutter={[20, 8]}>
            <Col span={24}>
                <Form.Item
                    name={["category", "name"]}
                    rules={[
                        {
                            required: true,
                            message: "Название категории обязателено",
                        },
                    ]}
                    hasFeedback
                >
                    <Input placeholder="Название категории" />
                </Form.Item>
            </Col>
            <Col span={24}>
                <Form.Item
                    name={["category", "key"]}
                    rules={[
                        {
                            required: true,
                            message: "Ключ категории обязателен",
                        },
                    ]}
                    hasFeedback
                >
                    <Input
                        placeholder="Ключ категории"
                        onChange={handleChangeCategory}
                    />
                </Form.Item>
            </Col>
            <Col span={24}>
                <UploadFile
                    fieldKey={["category", "image"]}
                    form={form}
                    rules={[
                        { required: true, message: "Изображение обязательно" },
                    ]}
                />
            </Col>
        </Row>
    );
};

export default CategoryCreateForm;
