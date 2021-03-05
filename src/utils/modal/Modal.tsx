import { Modal } from "antd";
import { IModalProps } from "src/types/modal/modal.types";

const defaultProps = {
  destroyOnClose: true,
};

export function showModal({
  title,
  type = "success",
  content,
  okText = "Хорошо",
  centered = true,
}: IModalProps) {
  Modal[type]({
    content,
    title,
    okText,
    centered,
    ...defaultProps,
  });
}
