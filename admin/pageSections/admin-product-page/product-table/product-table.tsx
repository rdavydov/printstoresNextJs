import React, { useState } from "react";
import { Table, Tag, Space, Image, message } from "antd";
import CustomButton from "components/Button/CustomButton";
import CategoryForm from "../category/category-form";
import { categoryService } from "api/services/category.service";
import { uploadFileService } from "api/services/uploadFile.service";

const { Column } = Table;

interface IMessage {
    type: "error" | "success" | "warning";
    text: string;
}

const showMessage = ({ type, text }: IMessage) => {
    message[type](text);
};

interface IProps {
    data: any[];
    visible: boolean;
    loading: boolean;
    onCancel: () => void;
    onCreate: (value) => void;
}

const ProductTable: React.FC<IProps> = ({
    data,
    visible,
    loading,
    onCancel,
    onCreate,
}) => {
    // const [state, setState] = useState({
    //     data,
    //     visible: false,
    //     loading: false,
    // });

    // const onCancel = () => {
    //     setState((prev) => ({ ...prev, visible: false }));
    // };

    // const handleViewModal = () => {
    //     setState((prev) => ({ ...prev, visible: true }));
    // };

    // const onCreate = async ({ name, key, image }) => {
    //     setState((prev) => ({ ...prev, loading: true, visible: false }));
    //     try {
    //         const {
    //             data: { path },
    //         } = await uploadFileService.uploadFile({ file: image });
    //         console.log(path);
    //         const staticPath = `http://localhost:3010/api/upload/${path}`;
    //         const data = { name, key, image: staticPath };
    //         await categoryService.categoryCreate({ data });
    //         showMessage({ type: "success", text: "Категория успешно создана" });
    //         const {
    //             data: { itemsList },
    //         } = await categoryService.getAllCategory({
    //             requestUrl: ["all"],
    //         });
    //         setState((prev) => ({ ...prev, data: itemsList, loading: false }));
    //     } catch (e) {
    //         const { message } = e.response.data;
    //         showMessage({ type: "error", text: message });
    //         setState((prev) => ({ ...prev, loading: false }));
    //     }
    // };

    return (
        <>
            <Table
                dataSource={data}
                loading={loading}
                pagination={{ pageSize: 5 }}
            >
                <Column title="Категория" key="name" dataIndex="name" />
                <Column
                    title="Изображение"
                    key="image"
                    dataIndex="image"
                    render={(image) => (
                        <Image src={image} width={200} height={200} />
                    )}
                />
                <Column title="Ключ-категории" key="key" dataIndex="key" />
                <Column title="Действия" key="action" />
            </Table>
            <CategoryForm
                visible={visible}
                onCancel={onCancel}
                onCreate={onCreate}
            />
        </>
    );
};

export default ProductTable;
