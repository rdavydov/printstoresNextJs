import { convertToBlob } from "utils/images/utils-images";

export function normalizeFile(image) {
    const { originFileObj } = image.file;
    return convertToBlob(originFileObj);
}
