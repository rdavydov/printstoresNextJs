import React, { useState } from 'react';
import { Form, Input, Modal } from 'antd';
import UploadFile from 'components/UploadFile/UploadFile';

interface IProps {
    visible: boolean;
    onCreate: (values) => void;
    onCancel: () => void;
}

const CategoryForm: React.FC<IProps> = ({ onCancel, onCreate, visible }) => {
  const [form] = Form.useForm();

  const onSumbit = async () => {
    try {
      const value = await form.validateFields();
      onCreate(value);
      form.resetFields();
      // eslint-disable-next-line no-empty
    } catch { }
  };
  return (
    <Modal
      visible={visible}
      title="Создание новой категории"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={onSumbit}
      destroyOnClose
      centered
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Название категории"
          rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="key"
          label="Ключ категории"
          rules={[
            {
              required: true,
              pattern: new RegExp(/[A-za-z]/),
              message: 'Введите ключ категории(Только английские)',
            },
          ]}
          hasFeedback
        >
          <Input type="textarea" />
        </Form.Item>
        <UploadFile
          fieldKey="image"
          form={form}
          rules={[
            {
              required: true,
              message: 'Загрузите изображение товара',
            },
          ]}
        />
      </Form>
    </Modal>
  );
};

export default CategoryForm;
