import React from "react";
import { Col, Form, Row, Input, InputNumber } from "antd";
import { FormInstance } from "antd/lib/form";

import { UploadFile } from "components";

const { TextArea } = Input;

interface IProps {
    form: FormInstance;
    category: string | undefined;
}

const ProductForm: React.FC<IProps> = ({ form, category }) => {
    return (
        <Row>
            <Row gutter={[20, 8]}>
                <Col span={12}>
                    <Form.Item
                        name={["product", "name"]}
                        rules={[
                            {
                                required: true,
                                message: "Укажите название товара",
                            },
                        ]}
                        hasFeedback
                    >
                        <Input placeholder="Название товара" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name={["product", "key"]}
                        dependencies={["category", "key"]}
                    >
                        <Input placeholder="Категория" disabled />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name={["product", "price"]}
                        rules={[
                            {
                                required: true,
                                message: "Укажите цену",
                            },
                        ]}
                        normalize={(value) => {
                            if (
                                typeof parseInt(value) === "number" &&
                                !isNaN(value)
                            )
                                return +value;
                            return 0;
                        }}
                        hasFeedback
                    >
                        <Input placeholder="Цена товара" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name={["product", "discount"]}
                        hasFeedback
                        normalize={(value) => {
                            if (
                                typeof parseInt(value) === "number" &&
                                !isNaN(value)
                            )
                                return +value;
                            return 0;
                        }}
                    >
                        <Input placeholder="Скидка на товар" />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        name={["product", "prefix"]}
                        rules={[
                            {
                                required: true,
                                message: "Укажите артикул товара",
                            },
                        ]}
                        hasFeedback
                    >
                        <Input placeholder="Артикул товара" />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        name={["product", "details"]}
                        rules={[
                            {
                                required: true,
                                message: "Укажите состав товара",
                            },
                        ]}
                        hasFeedback
                    >
                        <TextArea
                            showCount
                            maxLength={100}
                            placeholder="Состав товара"
                        />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        name={["product", "description"]}
                        rules={[
                            {
                                required: true,
                                message: "Укажите описание товара",
                            },
                        ]}
                        hasFeedback
                    >
                        <TextArea
                            showCount
                            maxLength={140}
                            placeholder="Описание товара"
                        />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <UploadFile
                        fieldKey={["product", "image"]}
                        rules={[
                            {
                                required: true,
                                message: "Добавьте изображение товара",
                            },
                        ]}
                        form={form}
                    />
                </Col>
            </Row>
        </Row>
    );
};

export default ProductForm;
