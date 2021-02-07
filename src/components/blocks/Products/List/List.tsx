import React from 'react';
import { List, Card, Typography } from 'antd';
import { IProductsCard } from 'src/types/products-cards';
import styles from './ProductsCards.module.scss';
import { ProductCardFooter } from '../styles';
import { PaginationConfig } from 'antd/lib/pagination';
import Router from 'next/router';
import { configService } from 'src/api/services/config.service';

interface IProps {
  pagination: PaginationConfig;
}

const ProductsList = ({ dataSource, goLocation, pagination, }: IProductsCard & IProps) => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      setLoading(true);
    });
    Router.events.on('routeChangeComplete', () => {
      setLoading(false);
    });
    Router.events.on('routeChangeError', () => {
      setLoading(false);
    });

  }, []);
  return (
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
          <Card hoverable cover={<img src={configService.getStaticFileUrl(item.image)} height={300} alt="" />}>
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
  )
}

export default ProductsList;
