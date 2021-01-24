import ApiClient from "api/ApiClient";
import { AxiosRequestConfig } from "axios";
import { generateURL } from "utils/generateURL";
import { metadataKey } from "../Prefix";
import { RequestConfig } from "../types/configure.types";

export function Delete(apiUrl?: string, config?: RequestConfig) {
    return function (
        target: Object,
        propertyKey: string,
        descriptor: TypedPropertyDescriptor<any>
    ) {
        let originalFn: any /* OriginalFnDeleteType */ = descriptor.value;
        descriptor.value = async function PostWrapper(
            { data, requestUrl = [] }: any /* IDelete */
        ) {
            let RequestConfig: AxiosRequestConfig = {};
            let prefix = Reflect.getMetadata(metadataKey, target);
            const URL = generateURL(prefix, apiUrl, ...requestUrl);
            const response = await createDeleteRequest(
                data,
                URL,
                RequestConfig
            );
            const callbackResponse = () => response;
            return originalFn.call(this, {
                data,
                requestUrl,
                callbackResponse,
            });
        };
        return descriptor;
    };
}

async function createDeleteRequest(
    data,
    url: string,
    config?: AxiosRequestConfig,
    convertToFormData?: boolean
) {
    const response = await ApiClient.delete(url, data, config);
    return response;
}
