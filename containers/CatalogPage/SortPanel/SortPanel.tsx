import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { Input, Row, Col, Dropdown, Menu, Button } from 'antd'

import styles from './SortPanel.module.scss';
import { DownOutlined } from '@ant-design/icons';
import { getSortParams } from './sort.helpers';

interface IProps {
    sortBy: { menu: Array<{ label: string, value: string }>, onClick: (params) => void, defaultSortLabel: string; };
    total?: number;
    searchBy: { onChange: (params) => void }
}

const defaultSortValue = 'Сортировать';
const REFRESH_TEXT = 'Сбросить';
const defaultSortParams = {
    sortBy: '', filterText: '', direction: 'ASC'
}

const SortPanel = ({ sortBy: { menu, onClick, defaultSortLabel }, total, searchBy }: IProps) => {
    const searchParams = useRef(defaultSortParams);

    const dropdownLabel = useMemo(() => {

        return menu.find(({ value }) => value === defaultSortLabel)?.label ?? defaultSortValue

    }, [defaultSortLabel])

    const handleSortClick = useCallback((value, label,) => {
        const { sortBy, direction } = getSortParams(value);
        searchParams.current = { ...searchParams.current, sortBy, direction }
        onClick(searchParams.current);
    }, [onClick]);

    const refreshSort = () => {
        searchParams.current = { ...defaultSortParams }
        onClick(searchParams.current);
    }
    const onSearch = (e) => {
        searchParams.current = { ...searchParams.current, filterText: e.target.value };
        searchBy.onChange(searchParams.current);
    };

    const dropDownMenu = useMemo(() => (
        <Menu>
            {menu.map(({ label, value }) => <Menu.Item key={value} onClick={() => handleSortClick(value, label)}>{label}</Menu.Item>)}
            <Menu.Item onClick={refreshSort}>{REFRESH_TEXT}</Menu.Item>
        </Menu>
    ), [menu]);

    return (
        <Row className={styles.sortWrapper} >
            <Col span={4}>
                <Dropdown overlay={dropDownMenu} trigger={['click']}>
                    <Button>
                        {dropdownLabel} <DownOutlined />
                    </Button>
                </Dropdown>
            </Col>
            <Col span={20}>
                <Row className={styles.rightBar}>
                    <Col span={10} className={styles.searchBar}>
                        <Input onChange={onSearch} placeholder='Поиск по каталогу' />
                    </Col>
                    <Col>
                        {total} Товаров
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}


export default SortPanel;
