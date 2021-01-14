import { convertToBlob } from "utils/images/utils-images";

export function normalizeFile(image) {
    console.log(image, "normolize");
    const { originFileObj } = image.file;
    return convertToBlob(originFileObj);
}
