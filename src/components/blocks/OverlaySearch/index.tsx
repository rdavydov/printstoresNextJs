import { CloseCircleOutlined } from "@ant-design/icons";
import { AutoComplete } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { OverlayBoxInput, OverlaySearchClose, OverlaySearchContent, OverlaySearchWrapper } from "./styled";

interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const OverlaySearch = ({ visible, setVisible }: Props) => {
  const [timerID, setTimerID] = useState(null);
  const [wrapperAnimation, setWrapperAnimation] = useState({ fadeIn: true });

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  if (!visible) {
    return null;
  }

  const changeWrapperAnimation = (animation) => {
    setWrapperAnimation(animation);
    const timerID = setTimeout(() => {
      setVisible(false);
      setWrapperAnimation({ fadeIn: true });
    }, 500);
    setTimerID(timerID);
  };

  return (
    <OverlaySearchWrapper {...wrapperAnimation}>
      <OverlaySearchContent>
        <OverlayBoxInput {...wrapperAnimation}>
          <AutoComplete
            bordered={false}
            style={{
              width: "80%",
              borderBottom: "2px solid white",
              fontSize: "26px",
              color: "white",
            }}
            placeholder="Поиск"
          />
        </OverlayBoxInput>
        <OverlaySearchClose onClick={() => changeWrapperAnimation({ fadeOut: true })} {...wrapperAnimation}>
          <CloseCircleOutlined />
        </OverlaySearchClose>
      </OverlaySearchContent>
    </OverlaySearchWrapper>
  );
};

export default OverlaySearch;
