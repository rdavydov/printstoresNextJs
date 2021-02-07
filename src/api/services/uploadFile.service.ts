import { BaseService } from './base/base.service';

interface Response {
  path: string;
}

class UploadFileService extends BaseService {
  constructor() {
    super();
    this.prefix = 'storage';
  }
  async uploadFile(file: Blob | File | string | any): Promise<Response> {
    const formData = new FormData();
    formData.append('file', file);
    return this.POST('upload', formData);
  }
}

export const uploadFileService = new UploadFileService();
