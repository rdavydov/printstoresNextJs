import ApiClient from "api/ApiClient";
import { _createApiParams } from "./helpers/_getRequestConfig";
import { IGet, IPost, IPut, IDelete } from "./types/Controller.types";

export class Controller {
    constructor(private prefix: string) {
        this.prefix = prefix;
    }

    async GET(url, options?: IGet) {
        const { urlToUse } = _createApiParams({ ...options, controllerPrefix: this.prefix, url });
        const { data } = await ApiClient.get(urlToUse);
        return data;
    }

    async POST(url, body: any, options?: IPost) {
        const { urlToUse } = _createApiParams({ controllerPrefix: this.prefix, url, ...options });
        const { data } = await ApiClient.post(urlToUse, body)
        return data;
    }

    async PUT(url, options?: IPut) {
        const { urlToUse } = _createApiParams({ controllerPrefix: this.prefix, url, ...options });
    }

    async DELETE(url, body: any, options?: IDelete) {
        const { urlToUse } = _createApiParams({ controllerPrefix: this.prefix, url, ...options });
        const { data } = await ApiClient.delete(urlToUse, body);
        return data
    }

}