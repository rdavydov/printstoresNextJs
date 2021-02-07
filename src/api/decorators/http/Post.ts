import ApiClient from 'src/api/ApiClient';
import { _createApiParams } from '../helpers/createApiParams';
import { _getFormData } from '../helpers/getFormData';
import { _getRequestBody } from '../helpers/getRequestBody';
import { RequestConfig } from '../types/configure.types';

const defaultConfig = {
  createFormData: false,
  createBody: true,
};

export function Post(apiUrl?: string, { createBody, createFormData }: RequestConfig = defaultConfig) {
  return function (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>) {
    const apiClient = async (instance: Object, ...props: any[]) => {
      let body;
      if (createFormData) {
        body = _getFormData(instance, methodName, props);
      } else {
        body = _getRequestBody(instance, methodName, props);
      }
      const { urlToUse } = _createApiParams(instance, methodName, props, apiUrl);
      const { data } = await ApiClient.post(urlToUse, body);
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
