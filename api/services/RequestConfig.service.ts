import { AxiosRequestConfig } from "axios";

class RequestConfigService {
    getformDataConfig() {
        const config: AxiosRequestConfig = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };
        return config;
    }
}

export const requestConfig = new RequestConfigService();
