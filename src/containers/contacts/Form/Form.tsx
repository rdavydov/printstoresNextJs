import React from "react";
import { Form, Cascader, Input, Button } from "antd";
import { Rule } from "antd/lib/form";

import styles from "./Form.module.scss";

interface IFormRules {
  name: Rule[];
  theme: Rule[];
  email: Rule[];
  message: Rule[];
}

const rules: IFormRules = {
  name: [{ required: true, message: "Укажите ваше имя" }],
  theme: [{ required: true, message: "Укажите тему обращения" }],
  email: [{ required: true, message: "Укажите ваш email" }],
  message: [{ required: true, message: "Заполните данное поле" }],
};

const options = [
  { value: "Общие вопросы", label: "Общие вопросы", children: [{ value: "Общие вопросы", label: "Общие вопросы" }] },
  {
    value: "Вопросы по заказам ",
    label: "Вопросы по заказам",
    children: [
      { value: "Обмен и возврат", label: "Обмен и возврат" },
      { value: "Доставка и оплата", label: "Доставка и оплата" },
    ],
  },
  {
    value: "Коммерческие предложения",
    label: "Коммерческие предложения",
    children: [
      { value: "По вопросам рекламы", label: "По вопросам рекламы" },
      { value: "Поставщикам", label: "Поставщикам" },
      { value: "Курьерским службам", label: "Курьерским службам" },
    ],
  },
];

const ContactsPageForm = () => {
  const [form] = Form.useForm();

  const onFinish = (val) => {};
  return (
    <div className={styles.root}>
      <Form onFinish={onFinish} form={form}>
        <Form.Item name="theme" hasFeedback rules={rules.theme}>
          <Cascader options={options} placeholder="Тема обращения" />
        </Form.Item>

        <Form.Item name="name" hasFeedback rules={rules.name}>
          <Input placeholder="Введите ваше имя" />
        </Form.Item>

        <Form.Item name="email" hasFeedback rules={rules.email}>
          <Input placeholder="Введите ваш e-mail" />
        </Form.Item>
        <Form.Item name="message" hasFeedback rules={rules.message}>
          <Input.TextArea maxLength={200} showCount placeholder="Введите ваше сообщение" />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form>
    </div>
  );
};

export default ContactsPageForm;
