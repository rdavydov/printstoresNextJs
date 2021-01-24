import { get } from "lodash";
import { Decorators } from "../types/common";
import { RequestBodyEnum } from "../types/RequestBodyEnum";

export function _getRequestBody(instance: Object, methodName, props: any[]) {
    let requestBody;
    const bodyPropKeys =
        get(instance, [
            Decorators.STATIC_KEY,
            methodName,
            RequestBodyEnum.STATIC_KEY,
        ]) || {};

    Object.keys(bodyPropKeys).forEach((bodyKey) => {
        requestBody = props[bodyPropKeys[bodyKey]];
    });

    return requestBody;
}
