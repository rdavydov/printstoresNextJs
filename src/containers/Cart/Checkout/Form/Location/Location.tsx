import { Select, Form } from "antd";
import React from "react";
import { Flex } from "src/components/ui";
const CartCheckoutFormLocationFields = () => {
  return (
    <Flex>
      <Flex.Item mr={20} sm={{ span: 12, margin: 0 }} span={4} md={{ span: 5 }}>
        <Form.Item name="country" label="Страна" required>
          <Select defaultValue="Россия">
            <Select.Option value="Россия">Россия</Select.Option>
          </Select>
        </Form.Item>
      </Flex.Item>
      <Flex.Item span={4} sm={{ span: 12 }} md={{ span: 5 }}>
        <Form.Item name="city" label="Город" required>
          <Select defaultValue="Ростов-На-Дону">
            <Select.Option value="Ростов-На-Дону">Ростов-На-Дону</Select.Option>
          </Select>
        </Form.Item>
      </Flex.Item>
    </Flex>
  );
};

export default CartCheckoutFormLocationFields;
