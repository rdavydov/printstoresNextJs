import { AxiosRequestConfig } from "axios";

enum AuthTypeEnum {
    Bearer = "Bearer",
}

export enum MetadataKey {
    PREFIX = "PREFIX",
    REQUEST_CONFIG = "REQUEST_CONFIG",
    RESPONSE_CONFIG = "RESPONSE_CONFIG",
    DEFAULT_REQUEST_CONFIG = "DEFAULT_REQUEST_CONFIG",
}

type AuthType = AuthTypeEnum | "Bearer";

export interface ConfigureOptions {
    prefix?: string;
    requestConfig?: AxiosRequestConfig;
    responseConfig?: { parseRepsonse: boolean };
    defaultRequestConfig?: { [key: string]: any };
}

export interface RequestOptions {
    authType?: AuthType;
}
