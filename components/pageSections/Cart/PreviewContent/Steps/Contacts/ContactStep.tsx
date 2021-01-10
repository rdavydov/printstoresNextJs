import React from "react";
import { Form, Input, Select } from "antd";
import { getValidatingConfig } from "../config/getValidatingConfig";

const { Option } = Select;

const LABEL = {
    MESSAGE: "Сообщение",
    SOCIAL: "Социальная сеть",
    EMAIL: "E-mail",
    NAME: "Имя",
    MOBILE: "Мобильный телефон",
};

const ContactStep: React.FC = () => {
    const prefixSelector = (
        <Form.Item name={["contacts", "prefix"]} initialValue="7" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="7">+7</Option>
            </Select>
        </Form.Item>
    );

    const { validate } = getValidatingConfig();

    return (
        <>
            <Form.Item
                name={["contacts", "firstName"]}
                rules={validate.firstName}
            >
                <Input placeholder={LABEL.NAME} />
            </Form.Item>
            <Form.Item name={["contacts", "email"]} rules={validate.email}>
                <Input placeholder={LABEL.EMAIL} />
            </Form.Item>
            <Form.Item name={["contacts", "phone"]} rules={validate.phone}>
                <Input
                    addonBefore={prefixSelector}
                    style={{ width: "100%" }}
                    placeholder={LABEL.MOBILE}
                />
            </Form.Item>
            <Form.Item name={["contacts", "social"]}>
                <Input placeholder={LABEL.SOCIAL} />
            </Form.Item>
            <Form.Item name={["contacts", "message"]}>
                <Input.TextArea placeholder={LABEL.MESSAGE} />
            </Form.Item>
        </>
    );
};

export default ContactStep;
