import React from "react";
import { Button, Result } from "antd";
import { MenuLink } from "src/components/common";
import { Routes } from "src/constants/routes/routes";

const Page403 = () => (
  <Result
    status="403"
    title="403"
    subTitle="Извините, у вас нет прав доступа к этой странице."
    extra={
      <MenuLink href={Routes.HOME.href}>
        <Button type="primary">Вернуться назад</Button>
      </MenuLink>
    }
  />
);

export default Page403;
