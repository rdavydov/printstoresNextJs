import React from "react";
import { ContainerWithSidebar, Title } from "src/components/common";
import { Box, Typography } from "src/components/ui";
import Layout from "src/templates/Layout/Layout";

const DeliveryPage = () => {
  return (
    <Layout>
      <Box mb={40}>
        <ContainerWithSidebar>
          <Box>
            <Typography mb={10} fontSize="24px" fontWeight={500}>
              Способы доставки PRINTSTORES.RU
            </Typography>
            <Title mb={10}>Доставка</Title>
            <Box mb={10}>
              <Typography fontSize="20px" fontWeight={400}>
                Курьерская доставка
              </Typography>
              <Typography>
                У нас есть возможность курьерской доставки, наш курьер доставит ваш заказ в течении 4х часов с момента
                заказа. Стоимость доставки определяется при оформлении заказа, и зависит только от района доставки
              </Typography>
            </Box>
            <Box>
              <Typography fontSize="20px" fontWeight={400}>
                Самовывоз
              </Typography>
              <Typography>Вы можете забрать заказ из пунктов выдачи или из нашего офиса в г.Ростов-На-Дону.</Typography>
            </Box>
          </Box>
        </ContainerWithSidebar>
      </Box>
    </Layout>
  );
};

export default DeliveryPage;
