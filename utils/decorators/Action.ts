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
    descriptor.value = function Wrapper() {
      let prefix = Reflect.getMetadata(metadataKey, target);
      let URL;
      if (url) {
        URL = generateURL(prefix, url);
      } else {
        URL = generateURL(prefix);
      }
      [].push.call(arguments, URL);
      return originalMethod.apply(this, arguments);
    };
    return descriptor;
  };
}