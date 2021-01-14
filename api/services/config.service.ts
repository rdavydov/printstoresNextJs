import { AxiosRequestConfig } from "axios";

class ConfigService {
    getformDataConfig() {
        const config: AxiosRequestConfig = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };
        return config;
    }
}

export const configService = new ConfigService();
