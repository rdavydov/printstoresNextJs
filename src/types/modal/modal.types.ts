export interface IModalProps {
  title: string;
  content: React.ReactNode;
  okText?: string;
  centered?: boolean;
  type?: ModalType;
}

export type ModalType = "success" | "info" | "warning" | "error";
