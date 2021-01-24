import { get } from "lodash";
import { Decorators } from "../types/common";
import { ParamsEnum } from "../types/ParamsEnum";

export function _getPathParams(
    instance: Object,
    methodName: string,
    props: any[]
) {
    const pathParamValues: Record<string, any> = {};
    const pathParams =
        get(instance, [
            Decorators.STATIC_KEY,
            methodName,
            ParamsEnum.DEFAULT_KEY,
        ]) || {};

    Object.keys(pathParams).forEach((paramsKey) => {
        const paramsValue = props[pathParams[paramsKey]];
        pathParamValues[paramsKey] = paramsValue;
    });

    return pathParamValues;
}
