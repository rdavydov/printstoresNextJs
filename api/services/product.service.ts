import { Get } from "api/decorators";
import { Prefix } from "api/decorators/Prefix";
import { IGet } from "api/decorators/types/Get.types";
import { AxiosResponse } from "axios";

@Prefix("product")
class ProductService {
    @Get()
    getProductByKey({ requestUrl, callbackResponse }: IGet) {
        return callbackResponse();
    }

    @Get()
    getProductById({ requestUrl, callbackResponse }: IGet) {
        return callbackResponse();
    }
}

export const productService = new ProductService();
