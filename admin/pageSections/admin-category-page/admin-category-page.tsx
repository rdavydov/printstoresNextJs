import AdminLayout from "admin/AdminLayout/AdminLayout";
import { AdminLayoutContext } from "context/AdminLayoutContext";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateCategory } from "store/reducers/categoryReducer/extraReducers/extraReducers";
import { RootState } from "store/rootReducer";
import AdminProductHeader from "./header/admin-category-header";
import ProductTable from "./category-table/category-table";

const AdminProductPage = () => {
    const [state, setState] = useState({
        visible: false,
        selectedRowKeys: [],
    });
    const { category, loading } = useSelector(
        (state: RootState) => state.category
    );

    const dispatch = useDispatch();

    const onCancel = () => {
        setState((prev) => ({ ...prev, visible: false }));
    };

    const handleViewModal = () => {
        setState((prev) => ({ ...prev, visible: true }));
    };

    const onSelectChange = (selectedRowKeys) => {
        setState((prev) => ({ ...prev, selectedRowKeys }));
    };
    const rowSelection = {
        selectedRowKeys: state.selectedRowKeys,
        onChange: onSelectChange,
    };

    const onCreate = ({ name, key, image }) => {
        setState((prev) => ({ ...prev, visible: false }));
        dispatch(fetchCreateCategory({ name, key, image }));
    };

    const clearSelectedItems = () => {
        setState((prev) => ({ ...prev, selectedRowKeys: [] }));
    };

    return (
        <AdminLayoutContext.Provider
            value={{
                headerContent: (
                    <AdminProductHeader
                        handleViewModal={handleViewModal}
                        selectedItems={state.selectedRowKeys}
                        clearSelectedItems={clearSelectedItems}
                    />
                ),
            }}
        >
            <AdminLayout>
                <ProductTable
                    data={category}
                    onCancel={onCancel}
                    onCreate={onCreate}
                    visible={state.visible}
                    loading={loading}
                    rowSelection={rowSelection}
                />
            </AdminLayout>
        </AdminLayoutContext.Provider>
    );
};

export default AdminProductPage;
