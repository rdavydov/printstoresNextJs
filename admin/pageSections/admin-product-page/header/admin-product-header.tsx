import { categoryService } from "api";
import { CustomButton } from "components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategoryItems } from "store/reducers/categoryReducer/actionCreators/categoryActionCreators";
import { fetchDeleteCategory } from "store/reducers/categoryReducer/extraReducers/extraReducers";
import { showMessage } from "utils/Notify/showMessage";
import { HeaderWrapper, WrapperButton } from "./styled";

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
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(fetchDeleteCategory(selectedItems));
        clearSelectedItems();
    };

    return (
        <HeaderWrapper>
            <WrapperButton>
                <CustomButton
                    text="Добавить категорию"
                    onClick={handleViewModal}
                />
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
