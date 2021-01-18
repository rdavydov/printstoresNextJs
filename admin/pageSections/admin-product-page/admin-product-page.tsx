import React from "react";
import AdminLayout from "admin/AdminLayout/AdminLayout";
import { AdminLayoutContext } from "context/AdminLayoutContext";
import AdminProductHeader from "./product-header/product-header";
import ProductsTable from "./product-table/products-table";
import { useState } from "react";

const AdminProductPage = ({ data }) => {
    const [state, setState] = useState({
        visible: false,
        selectedRowKeys: [],
    });

    const handleViewModal = () => {
        setState((prev) => ({ ...prev, visible: true }));
    };
    const clearSelectedItems = () => {
        setState((prev) => ({ ...prev, selectedRowKeys: [] }));
    };

    const onSelectChange = (selectedRowKeys) => {
        setState((prev) => ({ ...prev, selectedRowKeys }));
    };
    const rowSelection = {
        selectedRowKeys: state.selectedRowKeys,
        onChange: onSelectChange,
    };
    const onCreate = (value) => {
        setState((prev) => ({ ...prev, visible: false }));
    };
    const onCancel = () => {
        setState((prev) => ({ ...prev, visible: false }));
    };

    return (
        <AdminLayoutContext.Provider
            value={{
                headerContent: (
                    <AdminProductHeader
                        selectedItems={state.selectedRowKeys}
                        handleViewModal={handleViewModal}
                        clearSelectedItems={clearSelectedItems}
                    />
                ),
            }}
        >
            <AdminLayout>
                <ProductsTable
                    data={data}
                    rowSelection={rowSelection}
                    visible={state.visible}
                    onCancel={onCancel}
                    onCreate={onCreate}
                />
            </AdminLayout>
        </AdminLayoutContext.Provider>
    );
};

export default AdminProductPage;
