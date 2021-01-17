import { AxiosResponse } from "axios";
import { RequestConfig } from "./configure.types";

export interface GetDecorator {
    url?: string | string[];
    config?: RequestConfig;
}

export interface IGet {
    requestUrl?: string[] | undefined;
    callbackResponse?: () => AxiosResponse<any>;
}

export type OriginalFnType = ({
    requestUrl,
    callbackResponse,
}: IGet) => AxiosResponse<any>;
