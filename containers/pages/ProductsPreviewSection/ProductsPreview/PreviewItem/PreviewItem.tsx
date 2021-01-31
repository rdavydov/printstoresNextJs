import React, { useMemo, useState } from 'react';
import { notification } from 'antd';
import { Product } from 'types/type/products.type';
import { useDispatch } from 'react-redux';
import { addCartProduct } from 'store/reducers/cardReducer/actionCreators/cardActionCreators';
import { useRouter } from 'next/router';
import Button from 'components/common/Button/CustomButton';
import CollapseItems from './CollapseItems/CollapseItems';
import {
  Image,
  PreviewLeftContent,
  PreviewRightContent,
  PreviewWrapper,
  PriceContent,
  Title,
  OldPrice,
  Price,
  ActionsWrapper,
} from './styled';
import styles from './PreviewItem.module.css';

const ORDER_NOW_TEXT = 'Добавить в корзину';
const DESCRIPTION_TEXT = 'Описание';
const DETAILS = 'Состав';
const DELIVERY_AND_PAY = 'Доставка и оплата';
const GO_TO_CARD = 'Перейти в корзину';

const PreviewItem: React.FC<Product> = ({
  image,
  name,
  oldPrice = 500,
  price,
  description,
  details,
  seo,
  _id,
  prefix,
  ...rest
}) => {
  const { push } = useRouter();
  const collapseContent = [
    { header: DESCRIPTION_TEXT, text: description },
    { header: DETAILS, text: details },
    { header: DELIVERY_AND_PAY, text: 'завтра' },
  ];

  const [state, setState] = useState({
    productAdded: false,
  });

  const dispatch = useDispatch();

  const addProduct = () => {
    dispatch(addCartProduct({
      id: _id, image, name, price, quantity: 1,
    }));
    setState({ productAdded: true });
    notification.success({
      message: 'Товар добавлен в корзину',
      placement: 'bottomRight',
    });
  };

  const goCard = () => {
    push('/cart');
  };

  const {
    onClick, text,
  } = useMemo(() => ({
    onClick: state.productAdded ? goCard : addProduct,
    text: state.productAdded ? GO_TO_CARD : ORDER_NOW_TEXT,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [state.productAdded]);

  return (
    <PreviewWrapper>
      <PreviewLeftContent>
        <Image src={image} />
      </PreviewLeftContent>
      <PreviewRightContent>
        <Title>{name}</Title>
        <PriceContent>
          <Price>{`${price}Р`}</Price>
          {oldPrice && <OldPrice>{`${oldPrice}Р`}</OldPrice>}
        </PriceContent>
        <ActionsWrapper>
          <Button
            className={styles.button}
            variant={state.productAdded ? 'default' : 'danger'}
            onClick={onClick}
          >
            {text}
          </Button>
        </ActionsWrapper>
        <CollapseItems info={collapseContent} />
      </PreviewRightContent>
    </PreviewWrapper>
  );
};

export default PreviewItem;
