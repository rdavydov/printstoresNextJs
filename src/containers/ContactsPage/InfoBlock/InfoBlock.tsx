import { Paragraph, Title } from "src/components/common";

import styles from "./InfoBlock.module.scss";

const ContactsPageInfoBlock = () => {
  return (
    <div>
      <Title>Контактная информация</Title>
      <Paragraph>
        Вопросы по оформлению, получению и оплаты заказа, претензии по качеству заказа направляются по адресу:
      </Paragraph>
      <div>
        <Paragraph>г.Ростов-На-Дону, Пацаева 19/1Д, ИП Фролов Е.А</Paragraph>
        <Paragraph>info@printstores.ru</Paragraph>
      </div>
      <div className={styles.requisitesBlock}>
        <ul className={styles.listStyles}>
          <Title level="h4">Реквизиты компании</Title>
          <li>Индивидуальный предприниматель Фролов Евгений Александрович (ИП Фролов Е.А.)</li>
          <li>Почтовый адрес: 344092, г.Ростов-На-Дону, Пацаева 19/1Д </li>
          <li>Р/с 40802810823000000970</li>
          <li>ИНН 540128563630</li>
          <li>К/с 30101810600000000774</li>
          <li>БИК 045004774</li>
        </ul>
      </div>
      <div className={styles.phoneBlock}>
        <Title level="h3">Наши телефоны:</Title>
        <Paragraph>
          <b>В Ростове-На-Дону:</b>{" "}
          <a className={styles.phoneLink} href="tel:+7-960-450-60-21">
            +7-960-450-60-21
          </a>
        </Paragraph>
      </div>
    </div>
  );
};

export default ContactsPageInfoBlock;
