import ApiClient from 'src/api/ApiClient';
import { requestConfig } from 'src/api/services/RequestConfig.service';
import { AxiosResponse } from 'axios';
import { generateURL } from 'src/utils/generateURL';
import { _createApiParams } from '../helpers/createApiParams';
import { _getFormData } from '../helpers/getFormData';
import { metadataKey } from '../Prefix';
import { RequestConfig } from '../types/configure.types';

const defaultConfig = {
  createFormData: true,
  createBody: false,
};

interface IRequestProps {
  file: any;
  requestUrl?: string[];
  callbackResponse?: () => AxiosResponse<any>;
}

export function Upload(apiUrl?: string, { createFormData }: RequestConfig = defaultConfig) {
  return (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {
    const apiClient = async (instance: Object, ...props: any[]) => {
      const body = _getFormData(instance, methodName, props);
      const { urlToUse } = _createApiParams(instance, methodName, props, apiUrl);
      const config = requestConfig.getformDataConfig();
      const { data } = await ApiClient.post(urlToUse, body, config);
      return data;
    };
    descriptor.value = async function (...props) {
      const instance = this;
      const response: Response = await apiClient(instance, ...props);
      return response;
    };
    return descriptor;
  };
}
