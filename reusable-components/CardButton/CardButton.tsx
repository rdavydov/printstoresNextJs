import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { CartIcon } from "./styled";

interface IProps {
    onClick?: () => void;
    className?: string;
}

const CardButton: React.FC<IProps> = ({ onClick, className }) => {
    return (
        <CartIcon className={className}>
            <ShoppingCartOutlined onClick={onClick} style={{ fontSize: 20 }} />
        </CartIcon>
    );
};

export default CardButton;
