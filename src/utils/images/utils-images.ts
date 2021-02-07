export function getBase64(img, callback: (value) => void) {
    if (!img) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
}

export const convertToBlob = (file: File) => {
    if (!file) return;
    const blob = new Blob([file], { type: file.type });
    return blob;
};
