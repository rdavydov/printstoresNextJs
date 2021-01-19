export function getBase64(img, callback: (value) => void) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
}

export const convertToBlob = (file: File) => {
    const blob = new Blob([file], { type: file.type });
    return blob;
};
