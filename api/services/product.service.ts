import 'reflect-metadata'
import { Controller, Get, Post } from 'api/decorators'
import { Product } from 'types/type/products.type'
import { Query } from 'api/decorators/params/Query'
import { Param } from 'api/decorators/params/Param'
import { Body } from 'api/decorators/params/Body'

@Controller('product')
class ProductService {
    @Get('prefix')
    async getProductByPrefix(
        @Query('prefix') prefix: string
    ): Promise<{ products: Product[] }> {
        return
    }

    @Get('{prefix}/{id}')
    async getProductById(
        @Param('prefix') prefix: string,
        @Param('id') id: string
    ): Promise<{ products: Product[] }> {
        return
    }

    @Get('all')
    async getAllProducts(): Promise<{ products: Product[] }> {
        return
    }

    @Get('filter')
    async filterProducts(
        @Query('pageSize') pageSize: string,
        @Query('currentPage') currentPage: string
    ): Promise<{ products: Product[]; total: number }> {
        return
    }

    @Post('create')
    async createProduct(@Body() data: any): Promise<Product> {
        return
    }
}

export const productService = new ProductService()
