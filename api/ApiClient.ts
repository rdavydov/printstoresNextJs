import axios, { AxiosRequestConfig } from "axios";

class ApiClient {
    public instance = axios.create({
        baseURL: "http://localhost:3010/api",
    });
    async get(url: string, config?: AxiosRequestConfig) {
        if (config) {
            return this.instance.get(url, config);
        }
        return this.instance.get(url);
    }
    async post(url: string, data: any, config?: AxiosRequestConfig) {
        if (config) {
            return this.instance.post(url, data, config);
        }
        return this.instance.post(url, data);
    }
    async put(url) {
        return this.instance.put;
    }
    async delete() {
        return this.instance.delete;
    }
}

export default new ApiClient();
