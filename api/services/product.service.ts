import { Controller, Get, Post } from "api/decorators";
import { Prefix } from "api/decorators/Prefix";
import { Product } from "types/type/products.type";
import "reflect-metadata";
import { useQuery } from "api/decorators/params/useQuery";
import { useParams } from "api/decorators/params/useParams";

@Controller("product")
class ProductService {
    @Get("prefix")
    async getProductByPrefix(
        @useQuery("prefix") prefix: string
    ): Promise<{ products: Product[] }> {
        return;
    }

    @Get("{prefix}/{id}")
    async getProductById(
        @useParams("prefix") prefix: string,
        @useParams("id") id: string
    ): Promise<{ products: Product[] }> {
        return;
    }
    @Get("all")
    async getAllProducts(): Promise<{ products: Product[] }> {
        return;
    }
    @Get("filter")
    async filterProducts(
        {
            requestUrl,
            callbackResponse,
            query,
        }: any /* IGet<{ products: Product[]; total: number }> = {} */
    ) {
        return callbackResponse();
    }

    @Post("create")
    async createProduct(
        { data, requestUrl, callbackResponse }: any /*  IPost<Product> */
    ) {
        return callbackResponse();
    }
}

export const productService = new ProductService();
