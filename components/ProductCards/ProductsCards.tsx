import React from 'react';
import {
  List, Card, Image, Typography,
} from 'antd';
import { IProductsCard } from 'types/products-cards';
import styles from './ProductsCards.module.scss';
import { ProductCardFooter } from './styles';

const ProductsCard = ({ dataSource, goLocation }:IProductsCard) => (
  <List
    dataSource={dataSource}
    rowKey="_id"
    grid={{
      gutter: 16,
      column: 4,
    }}
    pagination={{ pageSize: 8 }}
    renderItem={((item) => (
      <List.Item onClick={() => goLocation(item)}>
        <Card hoverable>
          <Image src={item.image} height={270} preview={false} />
          <Typography.Title level={5} className={styles.title}>{item.name}</Typography.Title>
          <ProductCardFooter>
            <Typography.Text>{item.price}</Typography.Text>
            <Typography.Text>{400}</Typography.Text>
          </ProductCardFooter>
        </Card>
      </List.Item>
    ))}
  />
);

export default ProductsCard;
