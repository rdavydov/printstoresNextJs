import ApiClient from "api/ApiClient";
import { AxiosRequestConfig } from "axios";
import { generateURL } from "utils/generateURL";
import { metadataKey } from "./Prefix";

const apiClient = new ApiClient();

export function Post(url?:string, config?:AxiosRequestConfig){
    return function (
        target:Object,
        propertyKey: string,
        descriptor: TypedPropertyDescriptor<any>) {
            let originalFn = descriptor.value;
            descriptor.value = async function PostWrapper(...args) {
                let prefix = Reflect.getMetadata(metadataKey, target);
                const [data] = args[0];
                const urlMeta = args.slice(1);
                const URL = generateURL(prefix,url,urlMeta);
                const response = await apiClient.post(URL, data,config);
                args.push(response);
                return originalFn.call(this,...args);
            }
            return descriptor;
        }
}