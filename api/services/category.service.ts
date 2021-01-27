import { Controller, Get, Post } from 'api/decorators'
import { Category } from 'types/type/category.type'
import { Param } from 'api/decorators/params/Param'
import { Body } from 'api/decorators/params/Body'
import { Delete } from 'api/decorators/http/Delete'

@Controller('category')
class CategoryService {
  @Get(`{key}`)
  async getCategoryByKey(@Param('key') key: string): Promise<Category> {
    return
  }

  @Post('create')
  async categoryCreate(@Body() data: any): Promise<Category> {
    return
  }

  @Delete('delete')
  async categoryDelete(@Body() data: any): Promise<Category> {
    return
  }

  @Get('all')
  async getAllCategory(): Promise<Category> {
    return
  }
}

export const categoryService = new CategoryService()
