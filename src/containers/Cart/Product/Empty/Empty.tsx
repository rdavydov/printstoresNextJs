import Link from "next/link";
import React from "react";
import { Paragraph, Title } from "src/components/common";

import styles from "./empty.module.scss";

const CartProductEmpty = () => {
  return (
    <div className={styles.productEmpty}>
      <Title>В Вашей корзине пока нет товаров</Title>
      <Paragraph>
        Вы можете их выбрать в{" "}
        <Link href="/catalog">
          <a>
            <b>каталоге</b>
          </a>
        </Link>
      </Paragraph>
    </div>
  );
};

export default CartProductEmpty;
