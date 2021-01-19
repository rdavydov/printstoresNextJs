import { Col, Form, Row, Select } from "antd";
import { FormInstance } from "antd/lib/form";
import React from "react";
import ProductFormDropdown from "./dropdown";

const { Option } = Select;

interface IProps {
    form: FormInstance;
    category: string[];
    handleCreateCategory: () => void;
}

const CategorySelect = ({
    category = ["mug", "mug2", "mug3"],
    handleCreateCategory,
    form,
}) => {
    const handleChangeCategory = (key) => {
        form.setFieldsValue({ product: { key } });
    };

    return (
        <Row>
            <Col span={24}>
                <Form.Item
                    name={["category", "key"]}
                    rules={[
                        {
                            required: true,
                            message: "Категория обязательна",
                        },
                    ]}
                    hasFeedback
                >
                    <Select
                        placeholder="Выберите категорию"
                        dropdownRender={(menu) => (
                            <ProductFormDropdown
                                menu={menu}
                                onClick={handleCreateCategory}
                            />
                        )}
                        onChange={handleChangeCategory}
                    >
                        {category.map((item, index) => (
                            <Option key={index} value={item}>
                                {item}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
            </Col>
        </Row>
    );
};

export default CategorySelect;
