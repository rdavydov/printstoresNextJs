import React from 'react';
import { List, Card, Typography } from 'antd';
import { IProductsCard } from 'types/products-cards';
import styles from './ProductsCards.module.scss';
import { ProductCardFooter } from '../styles';
import pagination, { PaginationConfig } from 'antd/lib/pagination';

interface IProps {
  pagination: PaginationConfig;
  loading: boolean;
}


const ProductsList = ({ dataSource, goLocation, pagination, loading }: IProductsCard & IProps) => (
  <List
    dataSource={dataSource}
    rowKey="_id"
    grid={{
      gutter: 20,
      column: 4,
    }}
    loading={loading}
    className={styles.root}
    pagination={pagination ?? false}
    renderItem={(item) => (
      <List.Item onClick={() => goLocation(item)}>
        <Card hoverable cover={<img src={item.image} height={300} alt="" />}>
          <Typography.Title level={5} className={styles.title}>
            {item.name}
          </Typography.Title>
          <ProductCardFooter>
            <Typography.Text type="secondary" className={styles.textDiscount}>
              {400}
            </Typography.Text>
            <Typography.Text type="danger" strong>
              {item.price}
            </Typography.Text>
          </ProductCardFooter>
        </Card>
      </List.Item>
    )}
  />
);

export default ProductsList;
