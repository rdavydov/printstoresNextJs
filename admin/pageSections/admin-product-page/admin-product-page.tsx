import AdminLayout from "admin/AdminLayout/AdminLayout";
import { message } from "antd";
import { categoryService } from "api";
import { uploadFileService } from "api/services/uploadFile.service";
import { CustomButton } from "components";
import { AdminLayoutContext } from "context/AdminLayoutContext";
import React, { useState } from "react";
import ProductTable from "./product-table/product-table";

interface IMessage {
    type: "error" | "success" | "warning";
    text: string;
}
const showMessage = ({ type, text }: IMessage) => {
    message[type](text);
};

const AdminProductPage = ({ data }) => {
    const [state, setState] = useState({
        data,
        visible: false,
        loading: false,
    });
    const onCancel = () => {
        setState((prev) => ({ ...prev, visible: false }));
    };

    const handleViewModal = () => {
        setState((prev) => ({ ...prev, visible: true }));
    };

    const onCreate = async ({ name, key, image }) => {
        setState((prev) => ({ ...prev, loading: true, visible: false }));
        try {
            const {
                data: { path },
            } = await uploadFileService.uploadFile({ file: image });
            console.log(path);
            const staticPath = `http://localhost:3010/api/upload/${path}`;
            const data = { name, key, image: staticPath };
            await categoryService.categoryCreate({ data });
            showMessage({ type: "success", text: "Категория успешно создана" });
            const {
                data: { itemsList },
            } = await categoryService.getAllCategory({
                requestUrl: ["all"],
            });
            setState((prev) => ({ ...prev, data: itemsList, loading: false }));
        } catch (e) {
            const { message } = e.response.data;
            showMessage({ type: "error", text: message });
            setState((prev) => ({ ...prev, loading: false }));
        }
    };

    const headerActions = [
        <CustomButton
            text="Добавить категорию"
            onClick={handleViewModal}
            key="1"
        />,
    ];

    return (
        <AdminLayoutContext.Provider value={{ headerContent: headerActions }}>
            <AdminLayout>
                <ProductTable
                    data={state.data}
                    onCancel={onCancel}
                    onCreate={onCreate}
                    visible={state.visible}
                    loading={state.loading}
                />
            </AdminLayout>
        </AdminLayoutContext.Provider>
    );
};

export default AdminProductPage;
