import { PlusOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import React from "react";

const ProductFormDropdown = ({ menu, onClick }) => {
    return (
        <div>
            {menu}
            <Divider style={{ margin: "4px 0" }} />
            <div
                style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    padding: 8,
                }}
            >
                <a
                    style={{
                        flex: "none",
                        padding: "8px",
                        display: "block",
                        cursor: "pointer",
                    }}
                    onClick={onClick}
                >
                    <PlusOutlined /> Создать категорию
                </a>
            </div>
        </div>
    );
};

export default ProductFormDropdown;
