import { categoryService } from "api";
import { BadRequestException } from "api/services/errors.service";
import { uploadFileService } from "api/services/uploadFile.service";
import { ICategory } from "types/type/category.type";

export async function createCategory({ image, key, name }: ICategory) {
    if (!image)
        throw BadRequestException(
            "Ошибка создания категории, не загружен файл"
        );
    const {
        data: { path },
    } = await uploadFileService.uploadFile({ file: image });
    const data = { image: path, key, name };
    return categoryService.categoryCreate({ data });
}
