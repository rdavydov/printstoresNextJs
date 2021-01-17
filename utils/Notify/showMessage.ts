import { message } from "antd";

interface IMessage {
    type: "error" | "success" | "warning";
    text: string;
}

export const showMessage = ({ type, text }: IMessage) => {
    message[type](text);
};
