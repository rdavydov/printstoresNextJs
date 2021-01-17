import { AxiosResponse } from "axios";

export interface PostDecorator {}

export interface IPost {
    data: any;
    requestUrl?: string[];
    callbackResponse?: () => AxiosResponse<any>;
}

export type OriginalFnPostType = ({
    data,
    requestUrl,
    callbackResponse,
}: IPost) => AxiosResponse<any>;
