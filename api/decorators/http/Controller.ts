import "reflect-metadata";
import { ConfigureOptions, MetadataKey } from "../types/configure.service";

export function Controller(prefix: string, options: ConfigureOptions = {}) {
    return function ConfigureDecorator(constructor: Function) {
        const { requestConfig, responseConfig } = options;

        const defaultConfig = {
            Accept: "application/json",
            "Accept-Encoding": "gzip, deflate, br",
            "Content-Type": "application/json",
        };

        Reflect.defineMetadata(
            MetadataKey.PREFIX,
            prefix,
            constructor.prototype
        );
        Reflect.defineMetadata(
            MetadataKey.REQUEST_CONFIG,
            requestConfig,
            constructor.prototype
        );
        Reflect.defineMetadata(
            MetadataKey.RESPONSE_CONFIG,
            responseConfig,
            constructor.prototype
        );
        Reflect.defineMetadata(
            MetadataKey.DEFAULT_REQUEST_CONFIG,
            defaultConfig,
            constructor.prototype
        );
    };
}
