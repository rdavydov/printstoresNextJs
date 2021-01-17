import "reflect-metadata";
import { metadataKey } from "./Prefix";
import { generateURL } from "utils/generateURL";
import ApiClient from "api/ApiClient";
import { RequestConfig } from "./types/configure.types";
import { IGet, OriginalFnType } from "./types/Get.types";

export function Get(url?: string | string[], config?: RequestConfig) {
    return function (
        target: Object,
        propertyKey: string,
        descriptor: TypedPropertyDescriptor<any>
    ) {
        let originalFn: OriginalFnType = descriptor.value;
        descriptor.value = async function WrapperGet({
            requestUrl = [],
        }: IGet) {
            let prefix = Reflect.getMetadata(metadataKey, target);
            let URL = generateURL(prefix, url, ...requestUrl);
            const response = await createGetRequest(URL);
            const callbackResponse = () => response;
            return originalFn.call(this, { requestUrl, callbackResponse });
        };
        return descriptor;
    };
}

async function createGetRequest(url: string) {
    const response = await ApiClient.get(url);
    return response;
}
