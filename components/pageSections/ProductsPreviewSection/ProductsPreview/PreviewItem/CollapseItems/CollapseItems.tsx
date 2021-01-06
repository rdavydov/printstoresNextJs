import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

interface IProps {
    info: Array<{ header: string; text: string }>;
}

const CollapseItems: React.FC<IProps> = ({ info }) => {
    return (
        <Collapse>
            {info.map(({ header, text }, index) => (
                <Panel header={header} key={index}>
                    <p>{text}</p>
                </Panel>
            ))}
        </Collapse>
    );
};

export default CollapseItems;
