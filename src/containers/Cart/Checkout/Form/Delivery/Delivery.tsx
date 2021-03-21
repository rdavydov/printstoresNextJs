import React from "react";
import { Radio, Input, Form } from "antd";
import { Title } from "src/components/common";
import { Flex } from "src/components/ui";

interface IProps {
  showDeliveryAddressField: boolean;
}

const CartCheckoutFormDeliveryFields: React.FC<IProps> = ({ showDeliveryAddressField }) => {
  return (
    <>
      <Flex>
        <Flex.Item span={4}>
          <Title level="h4">
            <b>Способы доставки</b>
          </Title>
          <Form.Item name={["delivery", "method"]}>
            <Radio.Group defaultValue="COURIER" optionType="button" size="large" buttonStyle="solid">
              <Radio.Button value="COURIER">Курьер</Radio.Button>
              <Radio.Button value="PICKUP">Самовывоз</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Flex.Item>
      </Flex>
      {showDeliveryAddressField && (
        <Flex>
          <Flex.Item span={4}>
            <Form.Item name={["delivery", "address"]} label="Ваш адрес">
              <Input />
            </Form.Item>
          </Flex.Item>
        </Flex>
      )}
    </>
  );
};

export default CartCheckoutFormDeliveryFields;
