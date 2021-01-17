import React, { ReactNode } from "react";
import { Button } from "./styled";

interface IProps {
    text?: string | ReactNode;
    onClick?: () => void;
    className?: string;
    type?: "submit" | "button" | "reset";
    hovered?: "white";
}

const CustomButton: React.FC<IProps> = ({
    children,
    className,
    onClick,
    hovered,
    type = "button",
    text,
}) => {
    return (
        <Button
            className={className}
            onClick={onClick}
            hovered={hovered}
            type={type}
        >
            {text && text}
            {children}
        </Button>
    );
};

export default CustomButton;
