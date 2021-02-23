import { Modal } from "antd";

interface IModalProps {
  title: string;
  content: React.ReactNode;
  okText?: string;
  centered?: boolean;
  type?: ModalType;
}

const defaultProps = {
  destroyOnClose: true,
};

type ModalType = "success" | "info" | "warning" | "error";

export function showModal({ title, type = "success", content, okText = "Хорошо", centered = true }: IModalProps) {
  Modal[type]({
    content,
    title,
    okText,
    centered,
    ...defaultProps,
  });
}
