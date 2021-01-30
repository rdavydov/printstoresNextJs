import React, { useMemo, useState } from 'react';
import CustomButton from 'components/common/Button/CustomButton';
import CardButton from 'components/common/CardButton/CardButton';
import QuantityButton from 'components/common/QuantityButton/QuantityButton';
import { Product } from 'types/type/products.type';
import { useDispatch } from 'react-redux';
import { addCartProduct } from 'store/reducers/cardReducer/actionCreators/cardActionCreators';
import { useRouter } from 'next/router';
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
  Text,
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
  };

  const goCard = () => {
    push('/cart');
  };

  const {
    onClick, text, variant,
  } = useMemo(() => ({
    onClick: state.productAdded ? goCard : addProduct,
    text: state.productAdded ? GO_TO_CARD : ORDER_NOW_TEXT,
    variant: !state.productAdded && 'danger',

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
          <CustomButton
            className={styles.button}
            variant={variant}
            onClick={onClick}
          >
            {text}
          </CustomButton>
        </ActionsWrapper>
        <CollapseItems info={collapseContent} />
      </PreviewRightContent>
    </PreviewWrapper>
  );
};

export default PreviewItem;
