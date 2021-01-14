import React, { useState } from "react";
import { Table, Tag, Space, Image } from "antd";
import CustomButton from "reusable-components/Button/CustomButton";
import CategoryForm from "../category/category-form";
import { categoryService } from "api/services/category.service";

const columns = [
    {
        title: "Категория",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Изображение",
        dataIndex: "image",
        key: "image",
        render: (image) => (
            <>
                <Image src={image} width={200} height={200} />
            </>
        ),
    },
    {
        title: "Ключ-категории",
        dataIndex: "key",
        key: "key",
    },
];

const ProductTable = ({ data }) => {
    const [state, setState] = useState({
        data,
        visible: false,
    });

    const onCancel = () => {
        setState((prev) => ({ ...prev, visible: false }));
    };

    const handleViewModal = () => {
        setState((prev) => ({ ...prev, visible: true }));
    };

    const onCreate = async (value) => {
        console.log(value);
        //     await categoryService.categoryCreate({ data: value });
        // };
    };

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <CustomButton onClick={handleViewModal}>
                    Добавить категорию
                </CustomButton>
            </div>
            <Table columns={columns} dataSource={data} />
            <CategoryForm
                visible={state.visible}
                onCancel={onCancel}
                onCreate={onCreate}
            />
        </>
    );
};

export default ProductTable;
