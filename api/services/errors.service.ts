import { showMessage } from "utils/Notify/showMessage";

export function BadRequestException(message) {
    this.message = message;
    showMessage({ type: "error", text: message });
}
