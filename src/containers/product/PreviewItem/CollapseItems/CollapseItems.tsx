import React from 'react';
import { Collapse, Tabs } from 'antd';

const { TabPane } = Tabs

const { Panel } = Collapse;

interface IProps {
  info: Array<{ header: string; text: string }>;
}

const CollapseItems: React.FC<IProps> = ({ info }) => (

  <Tabs tabPosition='left'>
    {info.map(({ header, text }, index) => (
      <TabPane tab={header} key={index.toString()}>
        <p>{text}</p>
      </TabPane>
    ))}
  </Tabs>
);

export default CollapseItems;
