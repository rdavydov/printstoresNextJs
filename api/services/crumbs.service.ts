import { Controller, Get } from "api/decorators";
import { useQuery } from "api/decorators/params/useQuery";

@Controller("crumbs")
class CrumbsService {
    @Get()
    async getCrumbsConfig({ query, callbackResponse }: any) {
        return callbackResponse();
    }
    @Get()
    async getCatalogCrumbs(): Promise<{ path: string; title: string }> {
        return;
    }

    @Get()
    async getCategoryCrumbsByKey(
        @useQuery("key") key: string
    ): Promise<{ path: string; title: string }> {
        return;
    }
    @Get()
    async getProductCrumbsByKeyAndPrefix(
        @useQuery("prefix") prefix: string,
        @useQuery("id") id: string
    ): Promise<{ path: string; title: string }> {
        return;
    }

    @Get()
    async getProductCrumbsByPrefix(
        @useQuery("prefix") prefix: string
    ): Promise<{ path: string; title: string }> {
        return;
    }
}

export const crumbsService = new CrumbsService();
