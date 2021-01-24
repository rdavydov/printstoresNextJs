import axios, { AxiosRequestConfig } from "axios";

class ApiClient {
    public instance = axios.create({
        baseURL: "http://localhost:3010/api",
    });

  
    async request(method,url,config,data?) {
        try {
            switch(method){
                case 'GET':{
                    const response = await this.instance.get(url, config);
                    return response;
                }
                case 'POST':{
                    const response = await this.instance.post(url, data, config);
                    return response;
                }

                case 'PUT':{
                    return this.instance.put;
                }

                case 'DELETE':{
                    const response = await this.instance.delete(url, {
                        data,
                        ...config,
                    })
                    return response;
                }
            }
        }catch(e) {
            if(e.response){
                if(e.response.status >= 400){
                    this.errorHandler(e.response.status);
                }
            }
            return Promise.reject(e);
        }


        
    }



    async get(url: string, config: AxiosRequestConfig = {}) {
        return this.request('GET',url,config)
    }

    async post(url: string, data: any, config: AxiosRequestConfig = {}) {
        return this.request('POST',url,config,data);
    }

    async put(url) {
        return this.instance.put;
    }

    async delete(url: string, data: any, config: AxiosRequestConfig = {}) {
        return this.request('DELETE',url,config,data)
    }

    errorHandler(status){
        console.log(status,'status');
        switch(status){
            case 400:{

            }
            case 403:{

            }
            case 404:{

            }
            case 500:{
                
            }
        }
    }


}

export default new ApiClient();
