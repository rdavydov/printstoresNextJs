import { Request } from '../http/Request';

interface Response {
  path: string;
}

class UploadFileService {
  private request = new Request('storage');

  async uploadFile(file: Blob | File | string | any): Promise<Response> {
    const formData = new FormData();
    formData.append('file', file);
    return this.request.POST('upload', formData);
  }
}

export const uploadFileService = new UploadFileService();
