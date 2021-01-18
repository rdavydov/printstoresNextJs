import { Prefix } from "api/decorators/Prefix";
import { Get, Post } from "api/decorators";
import { IGet } from "api/decorators/types/Get.types";
import { Delete } from "api/decorators/Delete";
import { IPost } from "api/decorators/types/Post.types";

@Prefix("category")
class CategoryService {
    @Get()
    async getCategoryByKey({ requestUrl, callbackResponse }: IGet) {
        return callbackResponse();
    }

    @Post("create")
    async categoryCreate({ data, requestUrl, callbackResponse }: IPost) {
        return callbackResponse();
    }

    @Delete("delete")
    async categoryDelete({ data, requestUrl, callbackResponse }: IPost) {
        return callbackResponse();
    }

    @Get("all")
    async getAllCategory({ requestUrl, callbackResponse }: IGet = {}) {
        return callbackResponse();
    }
}

export const categoryService = new CategoryService();
