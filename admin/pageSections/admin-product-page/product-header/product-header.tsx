import React from "react";
import { HeaderWrapper, WrapperButton } from "admin/components";
import { CustomButton } from "components";

interface IProps {
    selectedItems: any[];
    handleViewModal: () => void;
    clearSelectedItems: () => void;
}

const AdminProductHeader: React.FC<IProps> = ({
    selectedItems,
    handleViewModal,
    clearSelectedItems,
}) => {
    const handleDelete = () => {};

    return (
        <HeaderWrapper>
            <WrapperButton>
                <CustomButton text="Добавить товар" onClick={handleViewModal} />
            </WrapperButton>
            {!!selectedItems.length && (
                <WrapperButton>
                    <CustomButton
                        text="Удалить"
                        onClick={handleDelete}
                        hovered="red"
                    />
                </WrapperButton>
            )}
        </HeaderWrapper>
    );
};

export default AdminProductHeader;
