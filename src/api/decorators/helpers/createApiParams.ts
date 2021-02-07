import { generateURL } from 'src/utils/generateURL';
import { _getFormData } from './getFormData';
import { getMetadata } from './getMetadata';
import { _getPathParams } from './getPathParams';
import { _getQuery } from './getQuery';
import { _getRequestBody } from './getRequestBody';
import { _replaceParamsUrl } from './replaceParamsUrl';

const defaultOptions = {
  createFormData: false,
  createBody: false,
};

interface IGetOptios {
  createFormData?: boolean;
  createBody?: boolean;
}

export function _createApiParams(instance: Object, methodName: string, props: any[], apiUrl?: string) {
  const { controllerPrefix, ...rest } = getMetadata(instance);
  let urlToUse = generateURL(controllerPrefix, apiUrl);
  const queryParams = _getQuery(instance, methodName, props);
  const pathParams = _getPathParams(instance, methodName, props);
  urlToUse = _replaceParamsUrl(urlToUse, pathParams);
  if (Object.keys(queryParams).length > 0) {
    urlToUse += '?' + new URLSearchParams(queryParams).toString();
  }
  return {
    urlToUse,
    queryParams,
    pathParams,
    ...rest,
  };
}
