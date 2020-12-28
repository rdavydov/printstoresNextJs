import axios from "axios";
import { generateURL } from "utils/generateURL";

class ApiClient {
    public instance = axios.create({
        baseURL: "http://localhost:3010/api",
    });
    get(route: string, params?: string[]) {
        return this.instance.get(route);
    }
    post(args: IArguments, data: any, params?: string[]) {
        let url = generateURL(args[args.length - 1], params);
        return this.instance.post(url, data);
    }
    put() {
        return this.instance.put;
    }
    delete() {
        return this.instance.delete;
    }
}

export default ApiClient;
