import React from "react";
import { Table, Image, message } from "antd";
import CategoryForm from "../category/category-form";

const { Column } = Table;

interface IProps {
    data: any[];
    visible: boolean;
    loading: boolean;
    onCancel: () => void;
    onCreate: (value) => void;
    rowSelection?: { selectedRowKeys: any[]; onChange: (selectedKeys) => void };
}

const ProductTable: React.FC<IProps> = ({
    data,
    visible,
    loading,
    onCancel,
    onCreate,
    rowSelection,
}) => {
    return (
        <>
            <Table
                dataSource={data}
                loading={loading}
                pagination={{ pageSize: 5 }}
                rowSelection={rowSelection}
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
