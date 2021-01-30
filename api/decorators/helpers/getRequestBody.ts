import { get } from 'lodash';
import { Decorators } from '../types/common';
import { RequestBodyEnum } from '../types/RequestBodyEnum';

export function _getRequestBody(instance: Object, methodName, props: any[]) {
  let requestBody = { data: {} };
  const bodyPropKeys =
    get(instance, [
      Decorators.STATIC_KEY,
      methodName,
      RequestBodyEnum.STATIC_KEY,
    ]) || {};

  Object.keys(bodyPropKeys).forEach((bodyKey) => {
    requestBody[Decorators.REQUEST_BODY_STATIC_FIELD] =
      props[bodyPropKeys[bodyKey]];
  });

  console.log(requestBody, 'requestBody');

  return requestBody[Decorators.REQUEST_BODY_STATIC_FIELD];
}
