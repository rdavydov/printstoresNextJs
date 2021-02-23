import React, { useState } from "react";

import { Form, Row, Col, Input, Rate, Space, Button } from "antd";
import { Config } from "src/config/config";
import WithGoogleReCAPTCHA from "src/components/common/GoogleReCAPTCHA/GoogleReCAPTCHA";
import { reviewsService } from "src/api/services/reviews/reviews.service";

import styles from "./Form.module.scss";
import utils from "src/utils";

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 15 },
};

const clientDataItem = {
  labelCol: { span: 4 },
  wrapperCol: { span: 10 },
};

interface IProps {
  recaptchaExecute?: () => Promise<string>;
  recaptchaLoaded: boolean;
}

const ReviewsForm = ({ recaptchaExecute, recaptchaLoaded, ...rest }: IProps) => {
  const [loading, setLoading] = useState(false);

  console.log(recaptchaLoaded);

  const [form] = Form.useForm();

  const loadingStart = () => {
    setLoading(true);
  };

  const loadingEnd = () => {
    setLoading(false);
  };

  const onFinish = async (val) => {
    loadingStart();

    try {
      if (recaptchaLoaded) {
        const recaptcha_key = await recaptchaExecute();

        await reviewsService.create({ ...val, recaptcha_key });

        utils.showModal({
          title: "Спасибо за оставленный отзыв",
          type: "success",
          content: "Ваш отзыв появится на сайте после модерации.",
        });
        resetFields();
      }
    } catch (e) {
    } finally {
      loadingEnd();
    }
  };

  const resetFields = () => {
    form.resetFields();
    loadingEnd();
  };

  return (
    <Form
      form={form}
      className={styles.form}
      onFinish={onFinish}
      {...clientDataItem}
      onReset={resetFields}
      layout={"vertical"}
    >
      <Row>
        <Col style={{ textAlign: "center", marginBottom: 40 }}>
          <b>Оставьте ваш отзыв:</b>
        </Col>
      </Row>

      <Form.Item name="clientName" label="Ваше имя" rules={[{ required: true, message: "Это обязательное поле" }]}>
        <Input placeholder="Ваше имя" />
      </Form.Item>

      <Form.Item name="orderNumber" label="Номер заказа" rules={[{ required: true, message: "Это обязательное поле" }]}>
        <Input placeholder="Номер заказа" />
      </Form.Item>

      <Form.Item name="email" label="Email" rules={[{ required: true, message: "Это обязательное поле" }]}>
        <Input placeholder="Ваш email" />
      </Form.Item>

      <Form.Item name="phone" label="Ваш телефон" rules={[{ required: true, message: "Это обязательное поле" }]}>
        <Input placeholder="Ваш телефон" />
      </Form.Item>

      <Form.Item initialValue={3.5} name="rating" label="Ваша оценка">
        <Rate />
      </Form.Item>

      <Form.Item
        name="message"
        label="Сообщение"
        rules={[{ required: true, message: "Это обязательное поле" }]}
        {...formItemLayout}
      >
        <Input.TextArea placeholder="Сообщение" maxLength={400} showCount autoSize={{ minRows: 2, maxRows: 6 }} />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 12 }}>
        <Space>
          <Button size="large" type="primary" htmlType="submit" loading={loading}>
            Отправить
          </Button>
          <Button size="large" type="ghost" className={styles.ml} htmlType="reset">
            Отменить
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

const ReviewsPageForm = WithGoogleReCAPTCHA(Config.RECAPTCHA_SITE_KEY)(ReviewsForm);

export default ReviewsPageForm;
