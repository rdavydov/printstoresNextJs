import { set } from "lodash";
import { Decorators } from "../types/common";

export function FormData(fieldName) {
    return (target: Object, methodName: string, paramIdx: number) => {
        set(
            target,
            [
                Decorators.STATIC_KEY,
                methodName,
                Decorators.REQUEST_FORM_DATA_KEY,
                fieldName,
            ],
            paramIdx
        );
    };
}
