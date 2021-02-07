import { showMessage } from 'src/utils/notifications/showMessage';

export function BadRequestException(message) {
  this.message = message;
  showMessage({ type: 'error', text: message });
}
