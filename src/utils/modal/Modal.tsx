import { Modal } from "antd";
import { IModalProps } from "src/types/modal/modal.types";
import noop from "lodash/noop";

const defaultProps = {
  destroyOnClose: true,
};

export function showModal({
  title,
  type = "success",
  content,
  okText = "ОК",
  centered = true,
  onOk = noop,
  onCancel = noop,
}: IModalProps) {
  Modal[type]({
    content,
    title,
    okText,
    centered,
    onOk,
    onCancel,
    ...defaultProps,
  });
}
