import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    min-width: 160px;
    height: 50px;
    border: none;
    outline: none;
    background-color: #161616;
    transition: 0.2s;
    color: #faf8f8;
    &:hover {
        background-color: #faf8f8;
        border: 1px solid #020002;
        color: #020002;
    }
`;
