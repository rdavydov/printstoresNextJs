import { FormInstance } from "antd/lib/form";
import React from "react";
import CategoryCreateForm from "./category-create-form";
import CategorySelect from "./category-select/category-select";

interface IProps {
    handleCreateCategory: () => void;
    createMode: boolean;
    form: FormInstance;
}

const CategoryFormStep: React.FC<IProps> = ({
    handleCreateCategory,
    createMode,
    form,
}) => {
    return (
        <>
            {createMode ? (
                <CategoryCreateForm form={form} />
            ) : (
                <CategorySelect
                    handleCreateCategory={handleCreateCategory}
                    form={form}
                />
            )}
        </>
    );
};

export default CategoryFormStep;
