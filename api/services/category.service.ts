import { AxiosResponse } from "axios";
import { Post } from "api/decorators/Post";
import { Get } from "api/decorators/Get";
import { Prefix } from "api/decorators/Prefix";

interface IPost {
    data: any;
    requestUrl?: string[];
    callbackResponse?: () => AxiosResponse<any>;
}

@Prefix("category")
class CategoryService {
    @Get()
    async getCategoryByKey(key: string, ...response: AxiosResponse<any>[]) {
        const [res] = response;
        return res;
    }

    @Post("create")
    async categoryCreate({ data, requestUrl, callbackResponse }: IPost) {
        return callbackResponse();
    }
}

export const categoryService = new CategoryService();
