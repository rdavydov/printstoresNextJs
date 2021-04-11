import React from "react";
import { Input, Form } from "antd";
import { Title } from "src/components/common";
import { Flex } from "src/components/ui";

const CartCheckoutFormContactsFields = () => {
  return (
    <>
      <Flex>
        <Flex.Item sm={{ margin: 0 }} span={12} color="text">
          <Title level="h4">
            <b>Данные получателя</b>
          </Title>
        </Flex.Item>
        <Flex.Item sm={{ span: 12, margin: 0 }} span={4} mr={20} md={{ span: 5 }}>
          <Form.Item name={["client", "phone"]} label="Телефон" required>
            <Input />
          </Form.Item>
        </Flex.Item>
        <Flex.Item sm={{ span: 12 }} span={4} md={{ span: 5 }}>
          <Form.Item name={["client", "email"]} label="Электронная почта" required>
            <Input />
          </Form.Item>
        </Flex.Item>
        <Flex.Item sm={{ span: 12, margin: 0 }} span={4} mr={20} md={{ span: 5 }}>
          <Form.Item name={["client", "firstName"]} label="Имя" required>
            <Input />
          </Form.Item>
        </Flex.Item>
        <Flex.Item sm={{ span: 12 }} span={4} md={{ span: 5 }}>
          <Form.Item name={["client", "surname"]} label="Фамилия" required>
            <Input />
          </Form.Item>
        </Flex.Item>
      </Flex>
      <Flex>
        <Flex.Item sm={{ span: 12 }} span={8} md={{ span: 12 }}>
          <Form.Item name="order_comment" label="Комментарий к заказу">
            <Input.TextArea autoSize={{ minRows: 4 }} />
          </Form.Item>
        </Flex.Item>
      </Flex>
    </>
  );
};

export default CartCheckoutFormContactsFields;
