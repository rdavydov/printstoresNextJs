import "reflect-metadata";
import ApiClient from "api/ApiClient";
import { _getPathParams } from "../helpers/getPathParams";
import { _getQuery } from "../helpers/getQuery";
import { _replaceParamsUrl } from "../helpers/replaceParamsUrl";
import { _createApiParams } from "../helpers/createApiParams";

interface TypeDescriptor<T> {
    enumerable?: boolean;
    configurable?: boolean;
    writable?: boolean;
    value?: (...args) => Promise<any>;
    get?: () => T;
    set?: (value: T) => void;
}

interface IGetOptios {
    createFormData?: boolean;
    createBody?: boolean;
}

export const Get = <Response>(apiUrl?: string, options?: IGetOptios) => {
    return <T>(
        target: Object,
        methodName: string,
        descriptor: TypeDescriptor<T>
    ) => {
        const apiClient = async (instance: Object, ...props: any[]) => {
            const { urlToUse } = _createApiParams(
                instance,
                methodName,
                props,
                options,
                apiUrl
            );
            const { data } = await ApiClient.get(urlToUse);
            return data;
        };
        descriptor.value = async function (...props) {
            const instance = this;
            const response: Response = await apiClient(instance, ...props);
            return response;
        };
        return descriptor;
    };
};
