import { Get, Post } from "api/decorators";
import { Prefix } from "api/decorators/Prefix";
import { IGet } from "api/decorators/types/Get.types";
import { IPost } from "api/decorators/types/Post.types";
import { Product } from "types/type/products.type";

@Prefix("product")
class ProductService {
    @Get("prefix")
    async getProductByKey({
        requestUrl,
        query,
        callbackResponse,
    }: IGet<{ products: Product[] }>) {
        return callbackResponse();
    }

    @Get()
    async getProductById({
        requestUrl,
        query,
        callbackResponse,
    }: IGet<{ products: Product[] }>) {
        return callbackResponse();
    }
    @Get("all")
    async getAllProducts({
        requestUrl,
        callbackResponse,
    }: IGet<{ products: Product[] }> = {}) {
        return callbackResponse();
    }
    @Get("filter")
    async filterProducts({
        requestUrl,
        callbackResponse,
        query,
    }: IGet<{ products: Product[]; total: number }> = {}) {
        return callbackResponse();
    }

    @Post("create")
    async createProduct({
        data,
        requestUrl,
        callbackResponse,
    }: IPost<Product>) {
        return callbackResponse();
    }
}

export const productService = new ProductService();
