import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

interface IProps {
    info: Array<{ header: string; text: string }>;
}

const CollapseItems: React.FC<IProps> = ({ info }) => (
  <Collapse>
    {info.map(({ header, text }, index) => (
      <Panel header={header} key={index.toString()}>
        <p>{text}</p>
      </Panel>
    ))}
  </Collapse>
);

export default CollapseItems;
