import { RequestConfig } from "./configure.types";

export interface GetDecorator {
    url?: string | string[];
    config?: RequestConfig;
}
