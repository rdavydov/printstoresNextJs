import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/rootReducer';
import CartInfo from './CartInfo';

const CartInfoContainer = ({ deliveryMethod }) => {
  const { product } = useSelector((state: RootState) => state.cart);

  return <CartInfo cart={product} deliveryMethod={deliveryMethod} />;
};

export default CartInfoContainer;
