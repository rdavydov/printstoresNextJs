import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import {
  message, Upload, Form, Image,
} from 'antd';
import { FormInstance, Rule } from 'antd/lib/form';
import React, { memo, useEffect, useState } from 'react';

import { normalizeFile } from 'utils/form/utils-form';
import { getBase64 } from 'utils/images/utils-images';

interface IProps {
    fieldKey: string | string[];
    form?: FormInstance;
    rules?: Rule[];
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

const UploadFile: React.FC<IProps> = ({ fieldKey, form, rules }) => {
  const [state, setState] = useState({
    loading: false,
    imageUrl: '',
  });

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setState((prev) => ({ ...prev, loading: true }));
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (imageUrl) => setState((prev) => ({
        ...prev,
        imageUrl,
        loading: false,
      })));
    }
  };
  const uploadButton = (
    <div>
      {state.loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Загрузить изображение</div>
    </div>
  );

  const getFile = () => {
    const file: any[] = form.getFieldValue(fieldKey);
    if (file) {
      getBase64(file, (imageUrl) => {
        setState((prev) => ({ ...prev, imageUrl }));
      });
    }
  };

  useEffect(() => {
    typeof form === 'object' && getFile();
    return () => {
      setState((prev) => ({ ...prev, imageUrl: '' }));
    };
  }, []);

  return (
    <>
      <Form.Item
        name={fieldKey}
        normalize={normalizeFile}
        rules={rules}
        valuePropName="file"
      >
        <Upload.Dragger
          listType="picture"
          showUploadList={false}
          onChange={handleChange}
          beforeUpload={beforeUpload}
        >
          {state.imageUrl ? (
            <Image
              src={state.imageUrl}
              alt="avatar"
              preview={false}
              style={{ width: '100%', maxHeight: '320px' }}
            />
          ) : (
            uploadButton
          )}
        </Upload.Dragger>
      </Form.Item>
    </>
  );
};

export default memo(UploadFile);
