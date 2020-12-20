import { Button } from "antd";
import React, { Fragment } from "react";
import cn from "classnames";
import styles from "./PaginationButton.module.css";
import { PaginationWrapper } from "./styled";

const LOAD_MORE = "Загрузить еще";

const PaginationButton = () => {
  return (
    <Fragment>
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

export default PaginationButton;
