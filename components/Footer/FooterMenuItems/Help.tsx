import React from "react";
import ListItem from "../../../reusable-components/ListItem";
import { MenuList } from "../../../reusable-components/styled";
import { IMenu } from "../../../types/interfaces/footer.menu.interface";
import { Title } from "./styled";


const Help = <T,>({ title, items }: IMenu<T>) => {
  return (
    <MenuList>
      <Title>{title}</Title>
      {items.map((menu, index) => (
        <ListItem text={menu.text} path={menu.path} key={index} />
      ))}
    </MenuList>
  );
};

export default Help;