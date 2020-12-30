import "reflect-metadata";
import { generateURL } from "utils/generateURL";
import { metadataKey } from "./Prefix";

export function Action(url?: string) {
    return function (
        target: Object,
        propertyKey: string,
        descriptor: TypedPropertyDescriptor<any>
    ) {
        const originalMethod = descriptor.value;
        descriptor.value = function Wrapper(params?: string[]) {
            let prefix = Reflect.getMetadata(metadataKey, target);
            let URL = generateURL(prefix, url, params);
            [].push.call(arguments, URL);
            return originalMethod.apply(this, arguments);
        };
        return descriptor;
    };
}
