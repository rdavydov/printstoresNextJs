import { CustomButton } from 'components';
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchDeleteCategory } from 'store/admin/admin-category-reducer/extraReducers/extraReducers';
import { HeaderWrapper, WrapperButton } from './styled';

interface IProps {
    selectedItems: any[];
    handleViewModal: () => void;
    clearSelectedItems: () => void;
}

const AdminCategoryHeader: React.FC<IProps> = ({
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

export default AdminCategoryHeader;
