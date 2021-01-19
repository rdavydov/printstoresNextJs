import React, { useEffect, useState } from "react";
import { Image, Table } from "antd";
import { productService } from "api";
import ProductStepFormContainer from "../product-form/product-step-form-container";

const { Column } = Table;

const defaultConfig = {
    currentPage: 1,
    pageSize: 3,
    total: 0,
};

interface IProps {
    data: any[];
    loading?: boolean;
    onCreate?: (value) => void;
    rowSelection?: { selectedRowKeys: any[]; onChange: (selectedKeys) => void };
}

const ProductsTable: React.FC<IProps> = ({
    data,
    loading,
    onCreate,
    rowSelection,
}) => {
    const [state, setState] = useState({
        itemsList: [],
        loading: false,
        ...defaultConfig,
    });

    const onChange = async (currentPage, pageSize) => {
        setState((prev) => ({ ...prev, loading: true }));
        const {
            data: { itemsList, total },
        } = await productService.filterProducts({
            query: { currentPage, pageSize },
        });
        setState((prev) => ({
            ...prev,
            itemsList,
            loading: false,
            total,
        }));
    };

    useEffect(() => {
        (async () => {
            setState((prev) => ({ ...prev, loading: true }));
            const {
                data: { itemsList, total },
            } = await productService.filterProducts({
                query: {
                    currentPage: String(1),
                    pageSize: String(defaultConfig.pageSize),
                },
            });
            setState((prev) => ({
                ...prev,
                itemsList,
                loading: false,
                total,
            }));
        })();
    }, []);
    return (
        <>
            <Table
                dataSource={state.itemsList}
                pagination={{ pageSize: 3, onChange, total: state.total }}
                loading={state.loading}
                rowKey="_id"
                rowSelection={rowSelection}
            >
                <Column dataIndex="name" title="Название товара" />
                <Column
                    dataIndex="image"
                    title="Изображение товара"
                    render={(image) => (
                        <Image src={image} width={200} height={200} />
                    )}
                />
                <Column key="price" dataIndex="price" title="Цена" />
                <Column dataIndex="discount" title="Скидка на товар" />
                <Column key="key" dataIndex="key" title="Категория товара" />
                <Column dataIndex="prefix" title="Артикул товара" />
            </Table>
            <ProductStepFormContainer onCreate={onCreate} />
        </>
    );
};

export default ProductsTable;
