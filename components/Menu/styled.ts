import styled from "styled-components";
export const MenuList = styled.ul`
    display: "flex";
`;

export const MenuListItem = styled.li`
    margin-bottom: 10px;

    &::last-child {
        margin-bottom: unset;
    }
`;

export const Title = styled.h4`
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 18px;
    color: #9e9e9e;
`;
