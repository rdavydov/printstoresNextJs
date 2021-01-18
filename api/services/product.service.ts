import { Get } from "api/decorators";
import { Prefix } from "api/decorators/Prefix";
import { IGet } from "api/decorators/types/Get.types";

@Prefix("product")
class ProductService {
    @Get("prefix")
    async getProductByKey({ requestUrl, query, callbackResponse }: IGet) {
        return callbackResponse();
    }

    @Get()
    async getProductById({ requestUrl, query, callbackResponse }: IGet) {
        return callbackResponse();
    }
    @Get("all")
    async getAllProducts({ requestUrl, callbackResponse }: IGet = {}) {
        return callbackResponse();
    }
    @Get("filter")
    async filterProducts({ requestUrl, callbackResponse, query }: IGet = {}) {
        return callbackResponse();
    }
}

export const productService = new ProductService();
