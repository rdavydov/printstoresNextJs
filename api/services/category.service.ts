import { AxiosResponse } from "axios";
import { Get } from "utils/decorators/Get";
import { Prefix } from "utils/decorators/Prefix";

@Prefix("category")
class CategoryService {
    @Get()
    async getCategoryByKey(key: string, ...response: AxiosResponse<any>[]) {
        const [res] = response;
        return res;
    }
}

export const categoryService = new CategoryService();
