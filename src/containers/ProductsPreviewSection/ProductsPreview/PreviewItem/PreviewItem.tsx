import React, { useMemo, useState } from 'react';
import { notification, Row, Col, Tabs, Comment } from 'antd';
import { Product } from 'src/types/type/products.type';
import { useDispatch } from 'react-redux';
import { addCartProduct } from 'src/store/reducers/cardReducer/actionCreators/cardActionCreators';
import { useRouter } from 'next/router';
import { Button } from 'src/components/common';
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
import moment from 'moment';

const ORDER_NOW_TEXT = 'Добавить в корзину';
const DESCRIPTION_TEXT = 'Описание';
const DETAILS = 'Правила ухода';
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
  }), [state.productAdded]);

  return (
    <PreviewWrapper>
      <Row style={{ marginBottom: 50 }}>
        <Col span={12}>
          <Image src={image} />
        </Col>
        <Col span={12}>
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
        </Col>
      </Row>
      <Row style={{ marginBottom: 50 }} >
        <CollapseItems info={collapseContent} />
      </Row>
      <Row style={{ marginBottom: 50 }}>
        <div style={{ width: '100%' }}>
          Другие товары
        <Tabs>
            <Tabs.TabPane key='1' tab='Мужская одежда'>Мужская одежда</Tabs.TabPane>
            <Tabs.TabPane key='2' tab='Женская одежда'>Женская одежда</Tabs.TabPane>
            <Tabs.TabPane key='3' tab='Детская одежда'>Детская одежда</Tabs.TabPane>
            <Tabs.TabPane key='4' tab='Аксессуры'>Аксессуры</Tabs.TabPane>
            <Tabs.TabPane key='5' tab='Чехлы для телефонов'>Чехлы для телефонов</Tabs.TabPane>
            <Tabs.TabPane key='6' tab='Товар для интерьера'>Товары для интерьера</Tabs.TabPane>
          </Tabs>
        </div>
      </Row>
      <Row>
        <div>
          Отзывы
          <Comment author='Евгений Фролов' content='Класс' datetime={moment().format('YYYY-MM-DD HH:mm:ss')} />
          <Comment author='Евгений Фролов' content='Класс' datetime={moment().format('YYYY-MM-DD HH:mm:ss')} />
          <Comment author='Евгений Фролов' content='Класс' datetime={moment().format('YYYY-MM-DD HH:mm:ss')} />
          <Comment author='Евгений Фролов' content='Класс' datetime={moment().format('YYYY-MM-DD HH:mm:ss')} />
          <Comment author='Евгений Фролов' content='Класс' datetime={moment().format('YYYY-MM-DD HH:mm:ss')} />
          <Comment author='Евгений Фролов' content='Класс' datetime={moment().format('YYYY-MM-DD HH:mm:ss')} />
          <Comment author='Евгений Фролов' content='Класс' datetime={moment().format('YYYY-MM-DD HH:mm:ss')} />
        </div>
      </Row>
    </PreviewWrapper>
  );
};

export default PreviewItem;
