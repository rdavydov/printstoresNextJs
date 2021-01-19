import ApiClient from "api/ApiClient";
import { requestConfig } from "api/services/RequestConfig.service";
import { AxiosResponse } from "axios";
import { generateURL } from "utils/generateURL";
import { metadataKey } from "./Prefix";

interface IRequestProps {
    file: any;
    requestUrl?: string[];
    callbackResponse?: () => AxiosResponse<any>;
}

export function Upload(url?: string, convertToFormData?: boolean) {
    return (
        target: Object,
        propertyKey: string,
        descriptor: TypedPropertyDescriptor<any>
    ) => {
        let originFn = descriptor.value;
        descriptor.value = async function Uploader({
            file,
            requestUrl = [],
        }: IRequestProps) {
            let prefix = Reflect.getMetadata(metadataKey, target);
            const URL = generateURL(prefix, url, ...requestUrl);
            const response = await createPostRequest(file, URL);
            const callbackResponse = () => response;
            return originFn.call(this, { file, requestUrl, callbackResponse });
        };
        return descriptor;
    };
}

async function createPostRequest(file, url: string) {
    const formData = new FormData();
    formData.append("file", file);
    const config = requestConfig.getformDataConfig();
    const response = await ApiClient.post(url, formData, config);
    return response;
}