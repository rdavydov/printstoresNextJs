import React from "react";

import { Form, Input, Select, Row, Col, Radio } from "antd";
import { Title } from "src/components/common";
import { useDispatch, useSelector } from "react-redux";
import { updateCheckoutFields } from "src/store/reducers/cart/checkout/checkout.reducer";
import { RootState } from "src/store/rootReducer";

const CartCheckoutForm = () => {
  const [form] = Form.useForm();

  const { checkout } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const onFinish = (val) => {
    console.log(val);
  };

  const onValuesChange = (_, val) => {
    console.log(val, "val");
    dispatch(updateCheckoutFields(val));
  };

  return (
    <div>
      <Form
        layout="vertical"
        id="checkout"
        form={form}
        onFinish={onFinish}
        onValuesChange={onValuesChange}
        initialValues={checkout}
      >
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
                <Select.Option value="Ростов-На-Дону">
                  Ростов-На-Дону
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Title level="h4">
              <b>Способы доставки</b>
            </Title>
            <Form.Item name={["delivery", "method"]}>
              <Radio.Group
                defaultValue="Курьер"
                optionType="button"
                size="large"
                buttonStyle="solid"
              >
                <Radio.Button value="Курьер">Курьер</Radio.Button>
                <Radio.Button value="Самовывоз">Самовывоз</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item name={["delivery", "address"]} label="Ваш адрес">
              <Input />
            </Form.Item>
          </Col>
        </Row>
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
            <Form.Item
              name={["client", "email"]}
              label="Электронная почта"
              required
            >
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
      </Form>
    </div>
  );
};

export default CartCheckoutForm;
