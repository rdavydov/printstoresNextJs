import React from "react";
import { Result, Button } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "src/store/rootReducer";
import { MenuLink } from "src/components/common";

const ResultPage = () => {
  const result = useSelector((state: RootState) => state.result);
  const buttons = result.buttons.map(({ onClick, route, text, ...rest }) => {
    const handleClick = () => {
      result.onButtonClick && result.onButtonClick();
      onClick && onClick();
    };
    return (
      <MenuLink href={route} key={route}>
        <Button onClick={handleClick} {...rest}>
          {text}
        </Button>
      </MenuLink>
    );
  });
  return <Result status={result.status} title={result.title} subTitle={result.subTitle} extra={buttons} />;
};

export default ResultPage;
