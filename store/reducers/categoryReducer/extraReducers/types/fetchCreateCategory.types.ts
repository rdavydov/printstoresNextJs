export interface fetchCreateCategoryType {
    image: string | File | Blob;
    key: string;
    name: string;
    callback?: () => void;
}
