import AdminLayout from "admin/AdminLayout/AdminLayout";
import { AdminLayoutContext } from "context/AdminLayoutContext";
import React, { memo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "store/rootReducer";
import AdminProductHeader from "./header/admin-category-header";
import ProductTable from "./category-table/category-table";
import { fetchCreateCategory } from "store/admin/admin-category-reducer/extraReducers/extraReducers";

const AdminCategoryPage = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [state, setState] = useState({
        visible: false,
    });
    const { category, loading } = useSelector(
        (state: RootState) => state.admin.categoryList,
        shallowEqual
    );

    const dispatch = useDispatch();

    const onCancel = () => {
        setState((prev) => ({ ...prev, visible: false }));
    };

    const handleViewModal = () => {
        setState((prev) => ({ ...prev, visible: true }));
    };

    const onSelectChange = (selectedRowKeys) => {
        setSelectedRowKeys(selectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const onCreate = async ({ name, key, image }) => {
        dispatch(fetchCreateCategory({ name, key, image, callback: onCancel }));
    };

    const clearSelectedItems = () => {
        setSelectedRowKeys([]);
    };
    console.log(category, "category-state");

    return (
        <AdminLayoutContext.Provider
            value={{
                headerContent: (
                    <AdminProductHeader
                        handleViewModal={handleViewModal}
                        selectedItems={selectedRowKeys}
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

export default memo(AdminCategoryPage);
