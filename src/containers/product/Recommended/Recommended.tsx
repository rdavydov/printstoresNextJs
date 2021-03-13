import { Row, Tabs } from "antd";
import React from "react";

const ProductRecommended = () => {
  return (
    <Row style={{ marginBottom: 50 }}>
      <div style={{ width: "100%" }}>
        Другие товары
        <Tabs>
          <Tabs.TabPane key="1" tab="Мужская одежда">
            Мужская одежда
          </Tabs.TabPane>
          <Tabs.TabPane key="2" tab="Женская одежда">
            Женская одежда
          </Tabs.TabPane>
          <Tabs.TabPane key="3" tab="Детская одежда">
            Детская одежда
          </Tabs.TabPane>
          <Tabs.TabPane key="4" tab="Аксессуры">
            Аксессуры
          </Tabs.TabPane>
          <Tabs.TabPane key="5" tab="Чехлы для телефонов">
            Чехлы для телефонов
          </Tabs.TabPane>
          <Tabs.TabPane key="6" tab="Товар для интерьера">
            Товары для интерьера
          </Tabs.TabPane>
        </Tabs>
      </div>
    </Row>
  );
};

export default ProductRecommended;
