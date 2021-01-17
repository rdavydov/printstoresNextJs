import ApiClient from "api/ApiClient";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { generateURL } from "utils/generateURL";
import { metadataKey } from "./Prefix";
import { RequestConfig } from "./types/configure.types";
import { IPost, OriginalFnPostType } from "./types/Post.types";

export function Post(url?: string, config?: RequestConfig) {
    return function (
        target: Object,
        propertyKey: string,
        descriptor: TypedPropertyDescriptor<any>
    ) {
        let originalFn: OriginalFnPostType = descriptor.value;
        descriptor.value = async function PostWrapper({
            data,
            requestUrl = [],
        }: IPost) {
            let RequestConfig: AxiosRequestConfig = {};
            let prefix = Reflect.getMetadata(metadataKey, target);
            const URL = generateURL(prefix, url, ...requestUrl);
            const response = await createPostRequest(data, URL, RequestConfig);
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

async function createPostRequest(
    data,
    url: string,
    config?: AxiosRequestConfig,
    convertToFormData?: boolean
) {
    const response = await ApiClient.post(url, data, config);
    return response;
}
