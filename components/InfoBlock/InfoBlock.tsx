import React from 'react';

import { Row, Col, Space } from 'antd';
import { InfoWrapper } from './styles';
import {
  StarOutlined,
  FieldTimeOutlined,
  CustomerServiceOutlined,
} from '@ant-design/icons';

const InfoBlock = () => {
  return (
    <InfoWrapper>
      <Row>
        <Col span={8}>
          <Space>
            <StarOutlined style={{ fontSize: 50, color: '#00b0f5' }} />
            <div>
              <h1> Гарантия</h1>
              <p>
                {' '}
                Качественные экологичные материалы. Контроль каждого изделия
              </p>
            </div>
          </Space>
        </Col>
        <Col span={8}>
          <Space>
            <FieldTimeOutlined style={{ fontSize: 50, color: '#00b0f5' }} />
            <div>
              <h1> Доставка</h1>
              <p> Быстрая доставка по России. Доставка по всему миру</p>
            </div>
          </Space>
        </Col>
        <Col span={7} offset={1}>
          <Space>
            <CustomerServiceOutlined
              style={{ fontSize: 50, color: '#00b0f5' }}
            />
            <div>
              <h1> Сервис</h1>
              <p>Лёгкий процесс оплаты, обмена и возврата</p>
            </div>
          </Space>
        </Col>
      </Row>
    </InfoWrapper>
  );
};

export default InfoBlock;
