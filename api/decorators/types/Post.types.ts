import { AxiosResponse } from "axios";

export interface PostDecorator {}

export interface IPost<Response = any> {
    data: any;
    requestUrl?: string[];
    callbackResponse?: () => AxiosResponse<Response>;
}

export type OriginalFnPostType = ({
    data,
    requestUrl,
    callbackResponse,
}: IPost) => AxiosResponse<Response>;
