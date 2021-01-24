import ApiClient from "api/ApiClient";
import { _createApiParams } from "../helpers/createApiParams";
import { RequestConfig } from "../types/configure.types";

export function Post(apiUrl?: string, config?: RequestConfig) {
    return function (
        target: Object,
        methodName: string,
        descriptor: TypedPropertyDescriptor<any>
    ) {
        const apiClient = async (instance: Object, ...props: any[]) => {
            const { urlToUse, requestBody } = _createApiParams(
                instance,
                methodName,
                props,
                { createBody: true },
                apiUrl
            );
            const { data } = await ApiClient.post(urlToUse, requestBody);
            return data;
        };
        descriptor.value = async function (...props) {
            const instance = this;
            const response: Response = await apiClient(instance, ...props);
            return response;
        };
        return descriptor;
    };
}
