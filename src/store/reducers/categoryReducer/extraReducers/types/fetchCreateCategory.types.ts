export interface fetchCreateCategoryType {
    image: File | Blob;
    key: string;
    name: string;
    callback?: () => void;
}
