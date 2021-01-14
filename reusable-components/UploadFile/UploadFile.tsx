import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload, Form } from "antd";
import { FormInstance } from "antd/lib/form";
import React, { useEffect } from "react";
import { useState } from "react";
import { normalizeFile } from "utils/form/utils-form";
import { getBase64 } from "utils/images/utils-images";

interface IProps {
    fieldKey: string | string[];
    form: FormInstance;
    fileList: any[];
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
}

const UploadFile: React.FC<IProps> = ({ fieldKey, form, fileList }) => {
    const [state, setState] = useState({
        fileList,
        loading: false,
        imageUrl: "",
    });

    const handleChange = (info) => {
        console.log(info);
        if (info.file.status === "uploading") {
            setState((prev) => ({ ...prev, loading: true }));
            return;
        }
        if (info.file.status === "done") {
            getBase64(info.file.originFileObj, (imageUrl) =>
                setState((prev) => ({
                    ...prev,
                    imageUrl,
                    fileList: info.fileList,
                    loading: false,
                }))
            );
        }
    };
    const uploadButton = (
        <div>
            {state.loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    useEffect(() => {
        if (fileList.length) {
            const { originFileObj } = fileList[0];
            getBase64(originFileObj, (imageUrl) => {
                setState((prev) => ({
                    ...prev,
                    imageUrl,
                    fileList,
                    loading: false,
                }));
            });
        } else {
            setState((prev) => ({ ...prev, fileList: [], imageUrl: "" }));
        }
    }, [fileList]);

    return (
        <>
            <Form.Item name={fieldKey} normalize={normalizeFile}>
                <Upload
                    listType="picture"
                    showUploadList={false}
                    onChange={handleChange}
                    beforeUpload={beforeUpload}
                >
                    {state.imageUrl ? (
                        <img
                            src={state.imageUrl}
                            alt="avatar"
                            style={{ width: "100%" }}
                        />
                    ) : (
                        uploadButton
                    )}
                </Upload>
            </Form.Item>
        </>
    );
};

export default UploadFile;
