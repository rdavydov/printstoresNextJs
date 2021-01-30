import React, { ReactNode, useMemo } from 'react';
import { Button } from './styled';

interface IProps {
    text?: string | ReactNode;
    onClick?: () => void;
    className?: string;
    type?: 'submit' | 'button' | 'reset';
    backgroundColor?:'crimson' | 'white' | 'black' | string;
    backgroundHover?: 'crimson' | 'white' | 'black' | string;
    colorHover?:string | 'white' | '#161616'
    color?:string | 'white' | 'black'
    borderColor?:string;
    variant?:'primary' | 'danger' | 'warning' | 'info' | 'default';
}

const CustomButton: React.FC<IProps> = ({
  children,
  className,
  onClick,
  type = 'button',
  variant,
  text,
  ...rest
}) => {
  const {
    backgroundColor, backgroundHover, color, colorHover, borderColor, borderColorHover,
  } = useMemo(() => {
    switch (variant) {
      case 'primary': {
        return;
      }
      case 'danger': {
        return {
          backgroundColor: 'white', backgroundHover: 'crimson', color: 'black', colorHover: 'white', borderColor: 'black',
        };
      }
      case 'warning': {
        return;
      }
      case 'info': {
        return;
      }
      case 'default': {
        return {
          backgroundColor: 'black', backgroundHover: 'white', color: 'white', colorHover: 'black', borderColor: 'white',
        };
      }
      default: {
        return {
          backgroundColor: 'black', backgroundHover: 'white', color: 'white', colorHover: 'black', borderColor: 'black', borderColorHover: 'black',
        };
      }
    }
  }, [variant]);

  return (
    <Button
      className={className}
      onClick={onClick}
      backgroundColor={backgroundColor}
      backgroundHover={backgroundHover}
      borderColorHover={borderColorHover}
      color={color}
      borderColor={borderColor}
      colorHover={colorHover}
      type={type}
      {...rest}
    >
      {text && text}
      {children}
    </Button>
  );
};

export default CustomButton;
