import Link from "next/link";
import React, { useContext } from "react";
import { Title } from "src/components/common";
import { Box, Flex, Typography } from "src/components/ui";
import { ThemeContext } from "src/context/themeContext";

const CartCheckoutHeader = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Flex alignItems="center" padding="25px 0" mb={15} borderBottom={`1px solid ${theme.color.border}`}>
      <Box>
        <Title level="h2">
          <b>PrintStores.ru</b>
        </Title>
      </Box>
      <Typography ml={15}>
        <Link href="/cart">
          <a>Вернуться в корзину</a>
        </Link>
      </Typography>
    </Flex>
  );
};

export default CartCheckoutHeader;
