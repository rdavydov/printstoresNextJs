import React from "react";

interface IModalContext {
    visible?: boolean;
    handleCloseModal?: () => void;
    setVisible?: () => void;
}

export const ModalContext = React.createContext<IModalContext>({});
