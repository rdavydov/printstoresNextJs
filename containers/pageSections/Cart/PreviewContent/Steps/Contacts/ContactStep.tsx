import React from "react";
import { Form, Input, Select } from "antd";
import { getValidatingConfig } from "../config/getValidatingConfig";

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
            <Select
                style={{ width: 70 }}
                options={[{ label: "7", value: 7 }]}
            />
        </Form.Item>
    );

    const { validate } = getValidatingConfig();

    return (
        <>
            <Form.Item
                name={["contacts", "firstName"]}
                rules={validate.firstName}
                hasFeedback
            >
                <Input placeholder={LABEL.NAME} />
            </Form.Item>
            <Form.Item
                name={["contacts", "email"]}
                rules={validate.email}
                hasFeedback
            >
                <Input placeholder={LABEL.EMAIL} />
            </Form.Item>
            <Form.Item
                name={["contacts", "phone"]}
                rules={validate.phone}
                hasFeedback
            >
                <Input
                    addonBefore={prefixSelector}
                    style={{ width: "100%" }}
                    placeholder={LABEL.MOBILE}
                />
            </Form.Item>
            <Form.Item name={["contacts", "social"]} hasFeedback>
                <Input placeholder={LABEL.SOCIAL} />
            </Form.Item>
            <Form.Item name={["contacts", "message"]} hasFeedback>
                <Input.TextArea placeholder={LABEL.MESSAGE} />
            </Form.Item>
        </>
    );
};

export default ContactStep;