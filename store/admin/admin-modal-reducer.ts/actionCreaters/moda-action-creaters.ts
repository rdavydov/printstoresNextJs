import { closeModal, openModal } from "../admin-modal-reducer";

interface IModal {
    callback?: () => void;
}

export const handleCloseModal = ({ callback }: IModal = {}) => (dispatch) => {
    dispatch(closeModal());
    if (callback) {
        callback();
    }
};

export const handleOpenModal = ({ callback }: IModal = {}) => (dispatch) => {
    dispatch(openModal());

    if (callback) {
        callback();
    }
};
