import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import {
  Col, Form, Row, Select,
} from 'antd';
import { FormInstance } from 'antd/lib/form';
import { categoryService } from 'api';
import ProductFormDropdown from './dropdown';

const { Option } = Select;

interface IProps {
    form: FormInstance;
    category?: string[];
    handleCreateCategory: () => void;
}

const CategorySelect = ({ handleCreateCategory, form }) => {
  const [categoryKeys, setCategoryKeys] = useState([]);

  const handleChangeCategory = (key) => {
    form.setFieldsValue({ product: { key } });
  };

  const getCategory = async () => {
    const { category } = await categoryService.getAllCategory();
    const keys = category.reduce(
      (prevKey, { key }) => [...prevKey, key],
      [],
    );
    setCategoryKeys(keys);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <Row>
      <Col span={24}>
        <Form.Item
          name={['category', 'key']}
          rules={[
            {
              required: true,
              message: 'Категория обязательна',
            },
          ]}
          hasFeedback
        >
          <Select
            placeholder="Выберите категорию"
            dropdownRender={(menu) => (
              <ProductFormDropdown
                menu={menu}
                onClick={handleCreateCategory}
              />
            )}
            onChange={handleChangeCategory}
          >
            {categoryKeys.map((item) => (
              <Option key={item.toString()} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
    </Row>
  );
};

export default CategorySelect;
