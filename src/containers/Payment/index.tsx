import Link from "next/link";
import React from "react";
import { Container, Paragraph, Title } from "src/components/common";

import moment from "moment";
moment.locale("ru");

import { PhoneFilled } from "@ant-design/icons";

import styles from "./Payment.module.scss";
import PaymentForm from "./Form/Form";

const PaymentYandexPage = ({ orderID, created_at, order_summary }) => {
  return (
    <Container>
      <header className={styles.header}>
        <Link href="/">
          <a>Назад в магазин</a>
        </Link>
        <div>PrintStores.ru</div>
      </header>
      <main>
        <div className={styles.yoomoneyBlock}>
          <img src="/iomoney.svg" alt="ЮМоней" width={400} />
          <div className={styles.yoomoneyContacts}>
            <PhoneFilled /> +7 495 974-35-86
          </div>
        </div>

        <div className={styles.paymentBlock}>
          <div className={styles.paymentInfo}>
            <div className={styles.orderInfo}>
              <Paragraph>
                Заказ №{orderID} от {moment(created_at).format("L")}
              </Paragraph>
            </div>
            <div>
              <Paragraph>
                <b>Сумма заказа: {order_summary}Руб.</b>
              </Paragraph>
            </div>
            <div>
              <Paragraph paragraphClassName={styles.redirectText}>
                Вы будете перенаправлены на сайт ЮМоней для оплаты вашего заказа.
              </Paragraph>
            </div>
          </div>
          <div className={styles.paymentForm}>
            <div>
              <img src="/visa.svg" width={80} />
              <img src="/mastercard.svg" width={80} />
            </div>
            <div>
              <PaymentForm orderID={orderID} sum={order_summary} />
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default PaymentYandexPage;
