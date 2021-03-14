import React from "react";
import { List, Card, Typography } from "antd";
import { IProductsCard } from "src/types/products-cards";
import styles from "./ProductsCards.module.scss";
import { ProductCardFooter } from "../styles";
import { PaginationConfig } from "antd/lib/pagination";
import { configService } from "src/api/services/config.service";
import Link from "next/link";
import { Routes } from "src/constants/routes/routes";

interface IProps {
  pagination: PaginationConfig;
}

const ProductsList = ({ dataSource, pagination }: IProductsCard & IProps) => {
  return (
    <List
      dataSource={dataSource}
      rowKey="_id"
      grid={{
        gutter: 20,
        column: 4,
      }}
      className={styles.root}
      pagination={pagination ?? false}
      renderItem={(item) => (
        <List.Item>
          <Link href={Routes.PRODUCT.href(item.product_id)}>
            <a>
              <Card hoverable cover={<img src={configService.getStaticFileUrl(item.preview)} height={300} alt="" />}>
                <Typography.Title level={5} className={styles.title}>
                  {item.title}
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
            </a>
          </Link>
        </List.Item>
      )}
    />
  );
};

export default ProductsList;
