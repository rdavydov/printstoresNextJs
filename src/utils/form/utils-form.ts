import { convertToBlob } from "src/utils/images/utils-images";

export function normalizeFile(image) {
  const { originFileObj } = image.file;
  return convertToBlob(originFileObj);
}
