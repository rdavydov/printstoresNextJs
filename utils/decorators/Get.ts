import "reflect-metadata";
import { metadataKey } from "./Prefix";
import { generateURL } from "../generateURL";
import ApiClient from "../../api/ApiClient";

const apiClient = new ApiClient();
export function Get(url?: string) {
    return function (
        target: Object,
        propertyKey: string,
        descriptor: TypedPropertyDescriptor<any>
    ): any {
        let originalFn = descriptor.value;
        descriptor.value = async function WrapperGet(key?: string[], ...args) {
            let prefix = Reflect.getMetadata(metadataKey, target);
            let URL = generateURL(prefix, url, key);
            const response = await apiClient.get(URL);
            if (key) {
                return originalFn.call(this, key, response);
            } else {
                args.push(response);
                return originalFn.apply(this, args);
            }
        };
        return descriptor;
    };
}
