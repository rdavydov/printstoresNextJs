export interface IModalProps {
  title: string;
  content: React.ReactNode;
  okText?: string;
  centered?: boolean;
  type?: ModalType;
  onOk?: () => void;
  onCancel?: () => void;
}

export type ModalType = "success" | "info" | "warning" | "error";
