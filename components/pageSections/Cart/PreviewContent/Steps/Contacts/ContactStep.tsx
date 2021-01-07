import React from "react";
import { Form, Input, Select } from "antd";

const { Option } = Select;

const LABEL = {
    MESSAGE: "Сообщение",
    SOCIAL: "Социальная сеть",
    EMAIL: "E-mail",
    NAME: "Имя",
    MOBILE: "Мобильный телефон",
};

const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
            <Option value="7">+7</Option>
        </Select>
    </Form.Item>
);

interface IProps {
    firstName: string;
    email: string;
    phone: string;
    social: string;
    message: string;
}

const ContactStep: React.FC<IProps> = ({
    email,
    firstName,
    message,
    phone,
    social,
}) => {
    return (
        <>
            <Form.Item
                initialValue={firstName}
                name={["contacts", "firstName"]}
                rules={[
                    { required: true, message: "Пожалуйста, укажите Ваше имя" },
                ]}
            >
                <Input placeholder={LABEL.NAME} />
            </Form.Item>
            <Form.Item
                initialValue={email}
                name={["contacts", "email"]}
                rules={[{ type: "email" }]}
            >
                <Input placeholder={LABEL.EMAIL} />
            </Form.Item>
            <Form.Item
                initialValue={phone}
                name={["contacts", "phone"]}
                rules={[
                    {
                        required: true,
                        message: "Укажите Ваш номер телефона",
                    },
                ]}
            >
                <Input
                    addonBefore={prefixSelector}
                    style={{ width: "100%" }}
                    placeholder={LABEL.MOBILE}
                />
            </Form.Item>
            <Form.Item initialValue={social} name={["contacts", "social"]}>
                <Input placeholder={LABEL.SOCIAL} />
            </Form.Item>
            <Form.Item initialValue={message} name={["contacts", "message"]}>
                <Input.TextArea placeholder={LABEL.MESSAGE} />
            </Form.Item>
        </>
    );
};

export default ContactStep;
