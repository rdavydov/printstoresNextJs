import "reflect-metadata";
import { metadataKey } from "./Prefix";
import { generateURL } from "../generateURL";
import ApiClient from "../../api/ApiClient";
import { AxiosRequestConfig } from "axios";

export function Get(url?: string, config?: AxiosRequestConfig) {
    return function (
        target: Object,
        propertyKey: string,
        descriptor: TypedPropertyDescriptor<any>
    ) {
        let originalFn = descriptor.value;
        descriptor.value = async function WrapperGet(...args) {
            let prefix = Reflect.getMetadata(metadataKey, target);
            let URL = generateURL(prefix, url, ...args);
            const response = await ApiClient.get(URL, config);
            args.push(response);
            return originalFn.call(this, ...args);
        };
        return descriptor;
    };
}
