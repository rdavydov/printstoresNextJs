import Link from "next/link";
import React from "react";
import { Paragraph, Title } from "src/components/common";
import { CartCheckoutHeaderWrapper } from "./styled";

const CartCheckoutHeader = () => {
  return (
    <CartCheckoutHeaderWrapper>
      <div>
        <Title level="h2">
          <b>PrintStores.ru</b>
        </Title>
      </div>
      <Paragraph style={{ marginLeft: 15 }}>
        <Link href="/cart">
          <a>Вернуться в корзину</a>
        </Link>
      </Paragraph>
    </CartCheckoutHeaderWrapper>
  );
};

export default CartCheckoutHeader;
