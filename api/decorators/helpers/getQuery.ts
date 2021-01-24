import { get } from "lodash";
import { Decorators } from "../types/common";
import { QueryEnum } from "../types/QueryEnum";

export function _getQuery(instance: Object, methodName, props: any[]) {
    const queryParams = {};
    const singleQueryParamKeys =
        get(instance, [
            Decorators.STATIC_KEY,
            methodName,
            QueryEnum.SINGLE_PARAM,
        ]) || {};
    Object.keys(singleQueryParamKeys)
        .sort()
        .forEach((queryParamKey) => {
            queryParams[queryParamKey] =
                props[singleQueryParamKeys[queryParamKey]];
        });

    return queryParams;
}
