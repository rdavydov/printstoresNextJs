import { Prefix } from "api/decorators/Prefix";
import { Get, Post } from "api/decorators";
import { IGet } from "api/decorators/types/Get.types";
import { Delete } from "api/decorators/Delete";
import { IPost } from "api/decorators/types/Post.types";
import { Category } from "types/type/category.type";

@Prefix("category")
class CategoryService {
    @Get()
    async getCategoryByKey({ requestUrl, callbackResponse }: IGet<Category>) {
        return callbackResponse();
    }

    @Post("create")
    async categoryCreate({
        data,
        requestUrl,
        callbackResponse,
    }: IPost<Category>) {
        return callbackResponse();
    }

    @Delete("delete")
    async categoryDelete({
        data,
        requestUrl,
        callbackResponse,
    }: IPost<Category>) {
        return callbackResponse();
    }

    @Get("all")
    async getAllCategory({
        requestUrl,
        callbackResponse,
    }: IGet<Category> = {}) {
        return callbackResponse();
    }
}

export const categoryService = new CategoryService();
