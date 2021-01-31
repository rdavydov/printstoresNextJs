import { Button } from 'components/common';
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
        <Button
          text="Добавить категорию"
          onClick={handleViewModal}
        />
      </WrapperButton>
      {!!selectedItems.length && (
        <WrapperButton>
          <Button
            text="Удалить"
            onClick={handleDelete}
          />
        </WrapperButton>
      )}
    </HeaderWrapper>
  );
};

export default AdminCategoryHeader;
