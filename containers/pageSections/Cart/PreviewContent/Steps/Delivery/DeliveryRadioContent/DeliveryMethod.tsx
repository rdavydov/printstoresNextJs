import { Radio } from 'antd';
import React from 'react';
import {
  FormRadioContent,
  FormRadioHeader,
  SmallText,
  Price,
  SubSmallText,
  DeliveryRadioContent,
} from '../../../styled';

interface IProps {
    className: string;
    title: string;
    price: string;
    onDeliveryClicked: (method: string) => void;
    defaultValue: string;
    time: string;
}

const DeliveryMethod: React.FC<IProps> = ({
  className,
  defaultValue,
  onDeliveryClicked,
  price,
  title,
  time,
  children,
}) => {
  const handleClick = () => {
    onDeliveryClicked(defaultValue);
  };

  return (
    <DeliveryRadioContent className={className} onClick={handleClick}>
      <Radio value={defaultValue} />
      <FormRadioContent>
        <FormRadioHeader>
          <SmallText>{title}</SmallText>
          <Price>{price}</Price>
        </FormRadioHeader>
        <SubSmallText>{time}</SubSmallText>
      </FormRadioContent>
    </DeliveryRadioContent>
  );
};

export default DeliveryMethod;
