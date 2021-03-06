import React from "react";

const YandexPaymentForm = () => {
  return (
    <div>
      <form method="POST" action="https://yoomoney.ru/quickpay/confirm.xml">
        <input type="hidden" name="receiver" value="410012359955842" />
        <input type="hidden" name="formcomment" value="Проект «Железный человек»: реактор холодного ядерного синтеза" />
        <input type="hidden" name="label" value="$order_id" />
        <input type="hidden" name="quickpay-form" value="donate" />
        <input type="hidden" name="targets" value="транзакция {order_id}" />
        <input type="hidden" name="sum" value="4568.25" data-type="number" />
        <label>
          <input type="radio" name="paymentType" value="PC" />
          ЮMoney
        </label>
        <label>
          <input type="radio" name="paymentType" value="AC" />
          Банковской картой
        </label>
        <input type="submit" value="Перевести" />
      </form>
    </div>
  );
};

export default YandexPaymentForm;
