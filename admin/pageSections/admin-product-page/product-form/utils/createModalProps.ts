const START_STEP = 1;
export function createModalProps({ state, handleClose, handleBack }) {
    const title =
        state.step === START_STEP
            ? state.createCategoryMode
                ? "Cоздание категории"
                : "Выбор категории"
            : "Создание товара";
    const okText =
        state.step === 2 && !state.final
            ? "Создать"
            : state.final
            ? "Создаю..."
            : "Далее";
    const cancelText = state.step === START_STEP ? "Отмена" : "Назад";
    const cancelButtonProps = {
        onClick: state.step === START_STEP ? handleClose : handleBack,
        disabled: state.final,
    };
    const bodyStyle = { minHeight: 150 };
    const maskClosable = false;
    const confirmLoading = state.final;
    return {
        title,
        okText,
        cancelText,
        cancelButtonProps,
        bodyStyle,
        maskClosable,
        confirmLoading,
    };
}
