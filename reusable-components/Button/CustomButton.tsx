import React, { ReactNode } from "react";
import { Button } from "./styled";

interface IProps {
    text?: string | ReactNode;
    onClick?: () => void;
    className?: string;
}

const CustomButton: React.FC<IProps> = ({
    children,
    className,
    onClick,
    text,
}) => {
    return (
        <Button className={className} onClick={onClick}>
            {children}
        </Button>
    );
};

export default CustomButton;
