import { MetadataKey } from "../types/configure.service";

export function getMetadata(target: Object) {
    const controllerPrefix = Reflect.getMetadata(MetadataKey.PREFIX, target);
    const defaultRequestConfig = Reflect.getMetadata(
        MetadataKey.DEFAULT_REQUEST_CONFIG,
        target
    );
    const requestConfig = Reflect.getMetadata(
        MetadataKey.REQUEST_CONFIG,
        target
    );
    const responseConfig = Reflect.getMetadata(
        MetadataKey.RESPONSE_CONFIG,
        target
    );

    return {
        controllerPrefix,
        defaultRequestConfig,
        requestConfig,
        responseConfig,
    };
}
