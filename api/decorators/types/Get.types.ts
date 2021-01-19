import { AxiosResponse } from "axios";
import { RequestConfig } from "./configure.types";

export interface GetDecorator {
    url?: string | string[];
    config?: RequestConfig;
}

export interface IGet {
    requestUrl?: string[] | string;
    callbackResponse?: () => AxiosResponse<any>;
    query?: { [key: string]: string };
}

export type OriginalFnType = ({
    requestUrl,
    callbackResponse,
}: IGet) => AxiosResponse<any>;