import { Row, Col, Select, Form } from "antd";
import React from "react";
const CartCheckoutFormLocationFields = () => {
  return (
    <Row>
      <Col span={8}>
        <Form.Item name="country" label="Страна" required>
          <Select defaultValue="Россия">
            <Select.Option value="Россия">Россия</Select.Option>
          </Select>
        </Form.Item>
      </Col>
      <Col span={8} offset={1}>
        <Form.Item name="city" label="Город" required>
          <Select defaultValue="Ростов-На-Дону">
            <Select.Option value="Ростов-На-Дону">Ростов-На-Дону</Select.Option>
          </Select>
        </Form.Item>
      </Col>
    </Row>
  );
};

export default CartCheckoutFormLocationFields;
