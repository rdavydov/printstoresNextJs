import styled from "styled-components";

interface IProps {
    hovered?: "white";
}

export const Button = styled.button<IProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    min-width: 160px;
    height: 50px;
    border: ${(props) =>
        props.hovered === "white" ? "1px solid #020002" : "none"};
    outline: none;
    background-color: ${(props) =>
        props.hovered === "white" ? "white" : "#161616"};
    transition: 0.2s;
    color: ${(props) => (props.hovered === "white" ? "#020002" : "#faf8f8")};
    &:hover {
        background-color: ${(props) =>
            props.hovered === "white" ? "#161616" : "#faf8f8"};
        border: 1px solid
            ${(props) => (props.hovered === "white" ? "black" : "#020002")};
        color: ${(props) => (props.hovered === "white" ? "white" : "#020002")};
    }
`;
