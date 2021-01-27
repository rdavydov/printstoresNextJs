import { productService } from 'api';
import { BadRequestException } from 'api/services/errors.service';
import { uploadFileService } from 'api/services/uploadFile.service';
import { IProduct } from 'types/interfaces/products.gallery.interface';

export async function createProduct({ image, ...rest }: IProduct) {
  if (!image) { throw BadRequestException('Ошибка создания товара, не загружен файл'); }
  const { path } = await uploadFileService.uploadFile(image);
  const data = { image: path, ...rest };
  return productService.createProduct(data);
}
