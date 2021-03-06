import React from "react";

import { Timeline } from "antd";

const AboutPageTimeline = () => {
  return (
    <div>
      <Timeline mode="alternate">
        <Timeline.Item label="2019-12-30" color="green">
          Открытие оптового отдела
        </Timeline.Item>
        <Timeline.Item label="2019-02-30">Открытие розничных магазинов в Ростове-На-Дону </Timeline.Item>
        <Timeline.Item label="2018-12-30">Начало производства принтов</Timeline.Item>
        <Timeline.Item label="2018-11-20" color="green">
          Запуск работы веб-сайта
        </Timeline.Item>
        <Timeline.Item label="2018-10-15" color="orange">
          Начало разработки веб-сайта компании
        </Timeline.Item>
        <Timeline.Item label="2018-10-01">Создание компании в Ростове-На-Дону</Timeline.Item>
      </Timeline>
    </div>
  );
};

export default AboutPageTimeline;
