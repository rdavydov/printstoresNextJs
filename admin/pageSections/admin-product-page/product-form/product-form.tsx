import React, { useEffect, useState } from "react";
import { Col, Form, Modal, Row, Input, Select, Divider } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

import { UploadFile } from "components";
import CategoryFormByCreateMode from "./category-form";
import ProductFormDropdown from "./dropdown";

const { TextArea } = Input;

const ProductForm = () => {
    const [form] = Form.useForm();
    const [category, setCategory] = useState({
        createMode: false,
        fields: ["mug", "undershirt"],
        name: "",
    });

    const handleClick = async () => {
        setCategory((prev) => ({
            ...prev,
            createMode: true,
        }));
    };

    const handleClose = () => {
        form.resetFields(["product", "category"]);
        setCategory((prev) => ({
            ...prev,
            createMode: false,
        }));
    };

    return (
        <Row>
            <Row gutter={[20, 8]}>
                <Col span={12}>
                    <Form.Item
                        name={["product", "name"]}
                        rules={[
                            {
                                required: true,
                                message: "Название товара обязательно",
                            },
                        ]}
                    >
                        <Input placeholder="Название товара" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name={["product", "category"]}
                        rules={[
                            {
                                required: true,
                                message: "Категория обязательна",
                            },
                        ]}
                    >
                        <Select
                            placeholder="Выберите категорию"
                            dropdownRender={(menu) => (
                                <ProductFormDropdown
                                    menu={menu}
                                    onClick={handleClick}
                                />
                            )}
                        >
                            {category.fields.map((item, index) => (
                                <Option key={index} value={item}>
                                    {item}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name={["product", "price"]}>
                        <Input placeholder="Цена товара" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name={["product", "discount"]}>
                        <Input placeholder="Скидка на товар" />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item name={["product", "prefix"]}>
                        <Input placeholder="Артикул товара" />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item name={["product", "details"]}>
                        <TextArea
                            showCount
                            maxLength={100}
                            placeholder="Состав товара"
                        />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item name={["product", "description"]}>
                        <TextArea
                            showCount
                            maxLength={140}
                            placeholder="Описание товара"
                        />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item name={["product", "image"]}>
                        <UploadFile
                            fieldKey={["product", "image"]}
                            fileList={[]}
                        />
                    </Form.Item>
                </Col>
            </Row>
        </Row>
    );
};

export default ProductForm;
