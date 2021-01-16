import { Prefix } from "api/decorators/Prefix";
import { Get } from "api/decorators/Get";
import { AxiosResponse } from "axios";

@Prefix("product")
class ProductService {
    @Get()
    getProductByKey(prefix: string, ...response: AxiosResponse<any>[]) {
        const [res] = response;
        return res;
    }

    @Get()
    getProductById(
        prefix: string,
        id: number,
        ...response: AxiosResponse<any>[]
    ) {
        const [res] = response;
        return res;
    }
}

export const productService = new ProductService();
