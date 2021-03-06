import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { RequestMethod } from "src/types/api/http/http.types";

class ApiClient {
  public instance = axios.create({
    baseURL: process.env.BASE_URL,
  });

  async request(
    method: RequestMethod,
    url: string,
    config: AxiosRequestConfig,
    data?
  ): Promise<AxiosResponse> {
    try {
      switch (method) {
        case "GET": {
          const response = await this.instance.get(url, config);
          return response;
        }
        case "POST": {
          const response = await this.instance.post(url, data, config);
          return response;
        }

        case "PUT": {
          const response = await this.instance.put(url, data, config);
          return response;
        }

        case "DELETE": {
          const response = await this.instance.delete(url, {
            data,
            ...config,
          });
          return response;
        }
      }
    } catch (e) {
      if (e.response) {
        if (e.response.status >= 400) {
          this.errorHandler(e.response.status);
        }
      }
      return Promise.reject(e);
    }
  }

  async get(url: string, config: AxiosRequestConfig = {}) {
    return this.request("GET", url, config);
  }

  async post(url: string, data, config: AxiosRequestConfig = {}) {
    return this.request("POST", url, config, data);
  }

  async put(url: string) {
    return this.instance.put;
  }

  async delete(url: string, data, config: AxiosRequestConfig = {}) {
    return this.request("DELETE", url, config, data);
  }

  errorHandler(status) {
    switch (status) {
      case 400: {
      }
      case 403: {
      }
      case 404: {
      }
      case 500: {
      }
    }
  }
}

export default new ApiClient();
