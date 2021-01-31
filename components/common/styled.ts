import styled from 'styled-components';

export const MenuList = styled.ul`
    display: "flex";
`;

export const MenuListItemWrapper = styled.li`
    margin-bottom: 10px;

    &::last-child {
        margin-bottom: unset;
    }
`;

export const BreadcrumbsWrapper = styled.div`
    padding:40px 0;
`;

export const HeaderTitle = styled.h1``;
