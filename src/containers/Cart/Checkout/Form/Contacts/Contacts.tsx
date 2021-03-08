import React from "react";
import { Row, Col, Input, Form } from "antd";
import { Title } from "src/components/common";

const CartCheckoutFormContactsFields = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <Title level="h4">
            <b>Данные получателя</b>
          </Title>
        </Col>
        <Col span={8}>
          <Form.Item name={["client", "phone"]} label="Телефон" required>
            <Input />
          </Form.Item>
        </Col>
        <Col span={8} offset={1}>
          <Form.Item name={["client", "email"]} label="Электронная почта" required>
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name={["client", "firstName"]} label="Имя" required>
            <Input />
          </Form.Item>
        </Col>
        <Col span={8} offset={1}>
          <Form.Item name={["client", "surname"]} label="Фамилия" required>
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name={["client", "patronymic"]} label="Отчество">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={17}>
          <Form.Item name="order_comment" label="Комментарий к заказу">
            <Input.TextArea autoSize={{ minRows: 4 }} />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default CartCheckoutFormContactsFields;
