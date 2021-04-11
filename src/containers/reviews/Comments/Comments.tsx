import moment from "moment";
import React from "react";

import { Comment, List, Rate } from "antd";

import { Title } from "src/components/common";

import styles from "./Comments.module.scss";

interface IProps {
  reviews: any[];
}

const ReviewsPageComments = ({ reviews }: IProps) => {
  return (
    <div className={styles.commentBlock}>
      <Title>Отзывы о сайте PRINTSTORES.RU</Title>
      <List
        dataSource={reviews}
        rowKey="_id"
        pagination={{ defaultPageSize: 10, style: { textAlign: "left" } }}
        renderItem={({ created_at, clientName, message, rating }) => (
          <Comment
            content={message}
            datetime={moment(created_at).format("YYYY-MM-DD HH:mm:ss")}
            author={clientName}
            actions={[<Rate value={rating} disabled />]}
          />
        )}
      />
    </div>
  );
};

export default ReviewsPageComments;

// <List
// dataSource={dataSource}
// rowKey="_id"
// grid={{
//   gutter: 20,
//   column: 4,
//   lg: 2,
//   xs: 1,
// }}
// className={styles.root}
// pagination={pagination ?? false}
// renderItem={(item) => (
//   <List.Item>
//     <Link href={Routes.PRODUCT.href(item.product_id)}>
//       <a>
//         <Card hoverable cover={<img src={configService.getStaticFileUrl(item.preview)} height={300} alt="" />}>
//           <Typography.Title level={5} className={styles.title}>
//             {item.title}
//           </Typography.Title>
//           <ProductCardFooter>
//             <Typography.Text type="secondary" className={styles.textDiscount}>
//               {400}
//             </Typography.Text>
//             <Typography.Text type="danger" strong>
//               {item.price}
//             </Typography.Text>
//           </ProductCardFooter>
//         </Card>
//       </a>
//     </Link>
//   </List.Item>
// )}
