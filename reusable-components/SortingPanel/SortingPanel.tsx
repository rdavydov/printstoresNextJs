import { useRouter } from "next/router";
import React from "react";
import { ISortConfig } from "../../config/sorting/sorting";
import {
  ItemsQuantity,
  SortingActions,
  SortingItem,
  SortingWrapper,
  Title,
} from "./styled";

const SORT = "Сортировать";

interface IProps {
  products: [];
  sortConfig: ISortConfig[];
}

const SortingPanel = ({ sortConfig, products: { length } }: IProps) => {
  const { pathname, asPath } = useRouter();
  return (
    <SortingWrapper>
      <SortingActions>
        {sortConfig.map(({ fieldName, title, handler, setData }, index) => (
          <SortingItem key={index}>
            <Title
              onClick={() => handler(asPath.replace(/[?].*/, ""), setData)}
            >
              {title}
            </Title>
          </SortingItem>
        ))}
      </SortingActions>
      <ItemsQuantity>{length}</ItemsQuantity>
    </SortingWrapper>
  );
};

export default SortingPanel;
