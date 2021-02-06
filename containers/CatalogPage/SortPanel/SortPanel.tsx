import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { Input, Row, Col, Dropdown, Menu, Button } from 'antd'

import styles from './SortPanel.module.scss';
import { DownOutlined } from '@ant-design/icons';
import { getSortParams } from './sort.helpers';

interface IProps {
    sortBy: { menu: Array<{ label: string, value: string }>, onClick: (params) => void }
}

const defaultSortValue = 'Сортировать';
const REFRESH_TEXT = 'Сбросить';
const defaultSortParams = {
    sortBy: '', filterText: '', direction: 'ASC'
}

const SortPanel = ({ sortBy: { menu, onClick } }: IProps) => {
    const [sortValue, setSortValue] = useState(defaultSortValue);
    const searchParams = useRef(defaultSortParams);

    const handleSortClick = useCallback((value, label,) => {
        setSortValue(label);
        const { sortBy, direction } = getSortParams(value);
        searchParams.current = { ...searchParams.current, sortBy, direction }
        onClick(searchParams.current);
    }, [onClick, sortValue]);

    const refreshSort = () => {
        setSortValue(defaultSortValue);
        searchParams.current = { ...defaultSortParams }
        onClick(searchParams.current);
    }
    const onSearch = (e) => {
        searchParams.current = { ...searchParams.current, filterText: e.target.value };
        onClick(searchParams.current);
    };

    const dropDownMenu = useMemo(() => (
        <Menu>
            {menu.map(({ label, value }) => <Menu.Item key={value} onClick={() => handleSortClick(value, label)}>{label}</Menu.Item>)}
            <Menu.Item onClick={refreshSort}>{REFRESH_TEXT}</Menu.Item>
        </Menu>
    ), [menu]);


    useEffect(() => {

    }, []);

    useLayoutEffect(() => {

    });

    return (
        <Row className={styles.sortWrapper} >
            <Col span={4}>
                <Dropdown overlay={dropDownMenu} trigger={['click']}>
                    <Button>
                        {sortValue} <DownOutlined />
                    </Button>
                </Dropdown>
            </Col>
            <Col span={14}>
                <Input onChange={onSearch} placeholder='Поиск по каталогу' />
            </Col>
            <Col>
                1000 товаров
            </Col>
        </Row>
    );
}


export default SortPanel;
