import axios, { AxiosRequestConfig } from "axios";

class ApiClient {
    public instance = axios.create({
        baseURL: "http://localhost:3010/api",
        headers: {
            accept: "application/json",
        },
    });
    get(url: string, config?: AxiosRequestConfig) {
        if (config) {
            return this.instance.get(url, config);
        }
        return this.instance.get(url);
    }
    post(url: string, data: any, config?: AxiosRequestConfig) {
        if (config) {
            return this.instance.post(url, data, config);
        }
        return this.instance.post(url, data);
    }
    put(url) {
        return this.instance.put;
    }
    delete() {
        return this.instance.delete;
    }
}

export default new ApiClient();
