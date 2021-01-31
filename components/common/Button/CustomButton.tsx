import React, { ReactNode, useMemo } from 'react';

import cn from 'classnames';
import styles from './Button.module.scss';
import { CustomButton } from './styled';

interface IProps {
    text?: string | ReactNode;
    onClick?: () => void;
    className?: string;
    type?: 'submit' | 'button' | 'reset';
    color?:string | 'white' | 'black'
    variant?:'primary' | 'danger' | 'warning' | 'info' | 'default';
}

const Button: React.FC<IProps> = ({
  children,
  className,
  onClick,
  type = 'button',
  variant,
  text,
  ...rest
}) => {
  const buttonVariant = useMemo(() => {
    switch (variant) {
      case 'primary': {
        return cn(styles.primary);
      }
      case 'danger': {
        return cn(styles.danger);
      }
      case 'warning': {
        return cn(styles.warning);
      }
      case 'info': {
        return cn(styles.info);
      }
      case 'default': {
        return cn(styles.default);
      }
      default: {
        return cn(styles.default);
      }
    }
  }, [variant]);

  return (
    <CustomButton
      className={cn(className, buttonVariant)}
      onClick={onClick}
      {...rest}
    >
      {text && text}
      {children}
    </CustomButton>
  );
};

export default Button;
