import React from "react";
import { Row, Col, Radio, Input, Form } from "antd";
import { Title } from "src/components/common";

interface IProps {
  showDeliveryAddressField: boolean;
}

const CartCheckoutFormDeliveryFields: React.FC<IProps> = ({ showDeliveryAddressField }) => {
  return (
    <>
      <Row>
        <Col span={8}>
          <Title level="h4">
            <b>Способы доставки</b>
          </Title>
          <Form.Item name={["delivery", "method"]}>
            <Radio.Group defaultValue="COURIER" optionType="button" size="large" buttonStyle="solid">
              <Radio.Button value="COURIER">Курьер</Radio.Button>
              <Radio.Button value="PICKUP">Самовывоз</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      {showDeliveryAddressField && (
        <Row>
          <Col span={8}>
            <Form.Item name={["delivery", "address"]} label="Ваш адрес">
              <Input />
            </Form.Item>
          </Col>
        </Row>
      )}
    </>
  );
};

export default CartCheckoutFormDeliveryFields;
