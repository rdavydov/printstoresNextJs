import styled from 'styled-components';

interface IProps {
    background:string;
}

export const SlideWrapper = styled.div<IProps>`
    position:relative;
    height: 280px;
    color: #fff;
    text-align: center;
    background-image: url(${(props) => props.background});
    background-size:100% 100%;
    background-repeat:no-repeat;
    background-position:center;
`;

export const SlideContent = styled.div`
`;
