import React from "react";
import { Row, Tabs } from "antd";

const { TabPane } = Tabs;

interface Props {
  description: string;
  details: string;
  delivery: string;
}

const DESCRIPTION_TEXT = "Описание";
const DETAILS = "Правила ухода";
const DELIVERY_AND_PAY = "Доставка и оплата";

const ProductInfo = ({ description, details, delivery }: Props) => {
  const info = [
    { header: DESCRIPTION_TEXT, text: description },
    { header: DETAILS, text: details },
    { header: DELIVERY_AND_PAY, text: delivery || "Завтра" },
  ];
  return (
    <Row style={{ marginBottom: 50 }}>
      <div style={{ width: "100%" }}>
        <Tabs tabPosition="top">
          {info.map(({ header, text }, index) => (
            <TabPane tab={header} key={index.toString()}>
              <p>{text}</p>
            </TabPane>
          ))}
        </Tabs>
      </div>
    </Row>
  );
};

export default ProductInfo;
