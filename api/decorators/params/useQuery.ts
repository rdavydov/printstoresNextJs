import { set } from "lodash";
import { Decorators } from "../types/common";
import { QueryEnum } from "../types/QueryEnum";

export function useQuery(propName: string) {
    return (target: Object, methodName: string, parameterIndex: number) => {
        set(
            target,
            [
                Decorators.STATIC_KEY,
                methodName,
                QueryEnum.SINGLE_PARAM,
                propName,
            ],
            parameterIndex
        );
    };
}
