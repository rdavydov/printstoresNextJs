import { set } from "lodash";
import { Decorators } from "../types/common";
import { ParamsEnum } from "../types/ParamsEnum";

export function useParams(propName: string) {
    return (target: Object, methodName: string, parameterIndex: number) => {
        set(
            target,
            [
                Decorators.STATIC_KEY,
                methodName,
                ParamsEnum.DEFAULT_KEY,
                propName,
            ],
            parameterIndex
        );
    };
}
