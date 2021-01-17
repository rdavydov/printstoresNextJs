import ApiClient from "api/ApiClient";
import { AxiosRequestConfig } from "axios";
import { generateURL } from "utils/generateURL";
import { metadataKey } from "./Prefix";
import { RequestConfig } from "./types/configure.types";
import { IDelete, OriginalFnDeleteType } from "./types/Delete.types";

export function Delete(url?: string, config?: RequestConfig) {
    return function (
        target: Object,
        propertyKey: string,
        descriptor: TypedPropertyDescriptor<any>
    ) {
        let originalFn: OriginalFnDeleteType = descriptor.value;
        descriptor.value = async function PostWrapper({
            data,
            requestUrl = [],
        }: IDelete) {
            let RequestConfig: AxiosRequestConfig = {};
            let prefix = Reflect.getMetadata(metadataKey, target);
            const URL = generateURL(prefix, url, ...requestUrl);
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
