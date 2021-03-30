import { Card, List, Typography } from "antd";
import Link from "next/link";
import React from "react";
import { configService } from "src/api/services/config.service";
import { ProductCardFooter } from "src/components/blocks/Products/styles";
import { Box } from "src/components/ui";
import { Routes } from "src/constants/routes/routes";

interface ProductItemProps {
  product_id: string | number;
  preview: string;
  title: string;
  price: number;
  old_price: number;
}

const ProductGalleryItem: React.FC<ProductItemProps> = ({ product_id, preview, title, price, old_price }) => {
  return (
    <Link href={Routes.PRODUCT.href(product_id)}>
      <a>
        <Box padding="5px" width="100%">
          <Card
            hoverable
            cover={<img src={configService.getStaticFileUrl(preview)} height={300} alt="" />}
            style={{ textAlign: "center" }}
          >
            <Typography.Title level={5} ellipsis>
              {title}
            </Typography.Title>
            <ProductCardFooter>
              {old_price && <Typography.Text type="secondary">{old_price}руб.</Typography.Text>}
              <Typography.Text type="danger" strong>
                {price}руб.
              </Typography.Text>
            </ProductCardFooter>
          </Card>
        </Box>
      </a>
    </Link>
  );
};

export default ProductGalleryItem;
