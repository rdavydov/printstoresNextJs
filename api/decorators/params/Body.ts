import { set } from "lodash";
import { Decorators } from "../types/common";
import { RequestBodyEnum } from "../types/RequestBodyEnum";

export function Body() {
    return (target: Object, methodName: string, paramIdx: number) => {
        set(
            target,
            [
                Decorators.STATIC_KEY,
                methodName,
                RequestBodyEnum.STATIC_KEY,
                Decorators.REQUEST_BODY_STATIC_FIELD,
            ],
            paramIdx
        ),
            "request";
    };
}
