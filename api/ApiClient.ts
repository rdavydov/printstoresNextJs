import axios from "axios";
import { generateURL } from "utils/generateURL";
export const instance = axios.create({
  baseURL: "http://localhost:3010/api",
});

export function get(args: IArguments, params?: string[]) {
  let url;
  if (params) {
    url = args[args.length - 1] + "/" + generateURL(params);
  } else {
    url = args[args.length - 1];
  }
  return instance.get(url);
}

export function post(args: IArguments, data: any, params?: string[]) {
  let url;
  url = args[args.length - 1];
  return instance.post(url, data);
}
class ApiClient {
  public baseURL = "http://localhost:3010/api";
  public instance = axios.create({
    baseURL: this.baseURL,
  });
}

export default ApiClient;
