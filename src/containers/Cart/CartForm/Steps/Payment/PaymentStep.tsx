import React from "react";
import { Form, Radio, Row, Col } from "antd";
import { Paragraph, Title } from "src/components/common";

import styles from "./PaymentStep.module.scss";

const PaymentStep = (props) => {
  return (
    <>
      <Title level="h4">Выберите способ оплаты</Title>
      <Form.Item name="payment_method" initialValue="online">
        <Radio.Group optionType="button" defaultValue="online" className={styles.antRadioGroup}>
          <Radio.Button value="online" className={styles.antRadio}>
            <div className={styles.infoBlock}>
              <Title level="h4">Оплатить сейчас</Title>
              <div>Банковской картой или электронными деньгами</div>
              <div className={styles.payment}>
                <img src="/visa.svg" width={60} height={60} />
                <img src="/mastercard.svg" width={60} height={60} />
                <img src="/mir.svg" width={60} height={60} />
                <img src="/yandex.svg" width={60} height={60} />
              </div>
            </div>
          </Radio.Button>
          <Radio.Button value="offline" className={styles.antRadio}>
            <div className={styles.infoBlock}>
              <Title level="h4">Оплата при получении</Title>
              <div>
                <b>Наличными или банковской картой</b>
                <Paragraph paragraphClassName={styles.textInfo}>
                  О возможности безналичного расчета уточняйте в службе доставки
                </Paragraph>
              </div>
            </div>
          </Radio.Button>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default PaymentStep;
