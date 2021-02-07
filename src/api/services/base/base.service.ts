import ApiClient from '../../ApiClient';
import { _createApiParams } from '../../http/helpers/_getRequestConfig';
import { IGet, IPost, IPut, IDelete } from '../../http/types/Controller.types';

export abstract class BaseService {
  protected prefix: string;

  protected async GET(url, options?: IGet) {
    const { urlToUse } = _createApiParams({ ...options, controllerPrefix: this.prefix, url });
    const { data } = await ApiClient.get(urlToUse);
    return data;
  }

  protected async POST(url, body: any, options?: IPost) {
    const { urlToUse } = _createApiParams({ controllerPrefix: this.prefix, url, ...options });
    const { data } = await ApiClient.post(urlToUse, body);
    return data;
  }

  protected async PUT(url, options?: IPut) {
    const { urlToUse } = _createApiParams({ controllerPrefix: this.prefix, url, ...options });
  }

  protected async DELETE(url, body: any, options?: IDelete) {
    const { urlToUse } = _createApiParams({ controllerPrefix: this.prefix, url, ...options });
    const { data } = await ApiClient.delete(urlToUse, body);
    return data;
  }
  async delete() {}
}
