import "reflect-metadata";
import { generateURL } from "utils/generateURL";
export function GetUrl(
    target: Object,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<any>
) {
    const originalFn = target[propertyKey];
    descriptor.value = function (link: string, params?: string[]) {
        return originalFn.call(this, link);
    };
}
