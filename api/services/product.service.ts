import ApiClient from "api/ApiClient";
import { Action } from "utils/decorators/Action";
import { Prefix } from "utils/decorators/Prefix";

@Prefix("product")
class ProductService extends ApiClient {
    @Action()
    getProductByKey(key: string) {}

    @Action()
    getProductById(id: number) {}
}
