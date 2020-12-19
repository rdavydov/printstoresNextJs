import React, { Fragment } from "react";
import { Button } from "antd";
import cn from "classnames";
import { cardData } from "../../../card.data";
import CategoryCard from "../../CategoryCard/CategoryCard";
import { CategoryWrapper, PaginationWrapper } from "../../styled/styled";

import styles from "./CategoryPromo.module.css";

const LOAD_MORE = "Загрузить еще";
const CategoryPromo = () => {
  return (
    <Fragment>
      <CategoryWrapper>
        <CategoryCard cardData={cardData} />
      </CategoryWrapper>
      <PaginationWrapper>
        <Button
          className={cn(styles.button, styles.buttonHovered)}
          size="large"
        >
          {LOAD_MORE}
        </Button>
      </PaginationWrapper>
    </Fragment>
  );
};

export default CategoryPromo;
