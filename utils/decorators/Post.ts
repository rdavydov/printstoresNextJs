import ApiClient from "api/ApiClient";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { generateURL } from "utils/generateURL";
import { metadataKey } from "./Prefix";

interface IPost {
    data: any;
    requestUrl?: string[];
    callbackResponse?: () => AxiosResponse<any>;
}
export function Post(
    url?: string,
    config?: AxiosRequestConfig,
    convertToFormData?: boolean
) {
    return function (
        target: Object,
        propertyKey: string,
        descriptor: TypedPropertyDescriptor<any>
    ) {
        let originalFn = descriptor.value;
        descriptor.value = async function PostWrapper({
            data,
            requestUrl = [],
        }: IPost) {
            let prefix = Reflect.getMetadata(metadataKey, target);
            const URL = generateURL(prefix, url, ...requestUrl);
            const response = await createPostRequest(data, URL, config);
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

function formDataConfig(target: object) {
    const formData = new FormData();
    Object.entries(target).map(([key, value]) => formData.append(key, value));
    return formData;
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
