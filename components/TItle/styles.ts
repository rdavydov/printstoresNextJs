import styled from 'styled-components';

interface IProps {
    color?:string;
    fontSize?:number;
}

export const CustomTitle = styled.h1<IProps>`
    color: ${(props) => props.color || 'rgba(0, 0, 0, 0.85)'};
    font-size: ${(props) => `${props.fontSize}px` || '15px'};
`;
