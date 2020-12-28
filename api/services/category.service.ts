import { AxiosResponse } from "axios";
import { Get } from "utils/decorators/Get";
import { Prefix } from "utils/decorators/Prefix";

@Prefix("category")
class CategoryService {
    @Get()
    async getCategoryByKey(key: string[], ...response: AxiosResponse<any>[]) {
        return response[0];
    }
}

export const categoryService = new CategoryService();
