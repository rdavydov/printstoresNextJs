import React, { useState } from "react";
import { Col, Row, Form, Input } from "antd";
import { UploadFile } from "components";

const CategoryFormByCreateMode = () => {
    const [category, setCategory] = useState({
        createMode: false,
        fields: ["mug", "undershirt"],
        name: "",
    });
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
                >
                    <Input placeholder="Ключ категории" />
                </Form.Item>
            </Col>
            <Col span={24}>
                <Form.Item
                    name={["category", "image"]}
                    rules={[
                        { required: true, message: "Изображение обязательно" },
                    ]}
                >
                    <UploadFile
                        fileList={[]}
                        fieldKey={["category", "image"]}
                    />
                </Form.Item>
            </Col>
        </Row>
    );
};

export default CategoryFormByCreateMode;
