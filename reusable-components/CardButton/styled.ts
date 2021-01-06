import styled from "styled-components";

export const CartIcon = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 auto;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
        filter: brightness(0.85);
    }
`;
