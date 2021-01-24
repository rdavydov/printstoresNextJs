import { Controller, Get, Post } from "api/decorators";
import { Category } from "types/type/category.type";
import { useParams } from "api/decorators/params/useParams";
import { RequestBody } from "api/decorators/params/RequestBody";
import { Delete } from "api/decorators/http/Delete";

@Controller("category")
class CategoryService {
    @Get("{key}")
    async getCategoryByKey(@useParams("key") key: string): Promise<Category> {
        return;
    }

    @Post("create")
    async categoryCreate(@RequestBody() data: any): Promise<Category> {
        return;
    }

    @Delete("delete")
    async categoryDelete(): Promise<Category> {
        return;
    }

    @Get("all")
    async getAllCategory(): Promise<Category> {
        return;
    }
}

export const categoryService = new CategoryService();
