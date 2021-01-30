import { QuantityButton } from 'components/common';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  decrementCartProduct,
  deleteCartProduct,
  incrementCartProduct,
} from 'store/reducers/cardReducer/actionCreators/cardActionCreators';
import {
  CardWrapper,
  CardContent,
  CardHeader,
  CardName,
  CardPrice,
  Image,
  DeletedButton,
} from './styled';

interface IProps {
    name: string;
    price: number;
    id: number;
    image: string;
    quantity: number;
    fullWidth?: boolean;
    editMode?: boolean;
}

const DELETED_TEXT = 'Удалить';

const CartItem: React.FC<IProps> = ({
  id,
  image,
  name,
  price,
  quantity,
  editMode = false,
  fullWidth = false,
}) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(deleteCartProduct(id));
  };

  const incrementQuantity = () => {
    dispatch(incrementCartProduct(id));
  };

  const decrementQuantity = () => {
    dispatch(decrementCartProduct(id));
  };

  return (
    <CardWrapper fullWidth={fullWidth ? 'true' : 'false'}>
      <Image src={image} />
      <CardContent>
        <CardHeader>
          <CardName>{name}</CardName>
          <CardPrice>{`${price}Руб.`}</CardPrice>
        </CardHeader>
        {editMode ? (
          <DeletedButton onClick={deleteProduct}>
            {DELETED_TEXT}
          </DeletedButton>
        ) : (
          <QuantityButton
            quantity={quantity}
            onIncrement={incrementQuantity}
            onDecrement={decrementQuantity}
          />
        )}
      </CardContent>
    </CardWrapper>
  );
};

export default CartItem;
