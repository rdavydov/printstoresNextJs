import { Controller } from 'api/http/Controller';

interface Response {
  path: string;
}

class UploadFileService {
  private controller = new Controller('storage');
  async uploadFile(file: Blob | File | string | any): Promise<Response> {
    const formData = new FormData();
    formData.append('file', file);
    return this.controller.Post('upload', formData);
  }
}

export const uploadFileService = new UploadFileService();
