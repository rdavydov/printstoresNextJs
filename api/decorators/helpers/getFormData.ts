import { get } from "lodash";
import { Decorators } from "../types/common";

export function _getFormData(
    instance: Object,
    methodName: string,
    props: any[]
) {
    const formData = new FormData();
    const formDataKey =
        get(instance, [
            Decorators.STATIC_KEY,
            methodName,
            Decorators.REQUEST_FORM_DATA_KEY,
        ]) || {};
    Object.keys(formDataKey).forEach((key) => {
        formData.append(key, props[formDataKey[key]]);
    });
    return formData;
}
