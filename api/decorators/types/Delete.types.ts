import { AxiosResponse } from "axios";

export interface PostDecorator {}

export interface IDelete {
    data: any;
    requestUrl?: string[];
    callbackResponse?: () => AxiosResponse<any>;
}

export type OriginalFnDeleteType = ({
    data,
    requestUrl,
    callbackResponse,
}: IDelete) => AxiosResponse<any>;
