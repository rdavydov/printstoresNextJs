import React from 'react';
import { HeaderWrapper, WrapperButton } from 'admin/components';
import { Button } from 'components/common';
import { useDispatch } from 'react-redux';
import { handleOpenModal } from 'store/admin/admin-modal-reducer.ts/actionCreaters/moda-action-creaters';

interface IProps {
  selectedItems: any[];
  handleViewModal: () => void;
  clearSelectedItems: () => void;
}

const AdminProductHeader: React.FC<IProps> = ({
  selectedItems,
  clearSelectedItems,
}) => {
  const dispatch = useDispatch();

  const handleViewModal = () => {
    dispatch(handleOpenModal());
  };

  const handleDelete = () => { };

  return (
    <HeaderWrapper>
      <WrapperButton>
        <Button text="Добавить товар" onClick={handleViewModal} />
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

export default AdminProductHeader;
