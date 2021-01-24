import styled from 'styled-components';

export const Image = styled.img`
    width: 150px;
    height: 150px;
    margin-right: 20px;
`;
export const CardName = styled.p``;
export const CardPrice = styled.p``;

interface IProps {
    fullWidth?: 'true' | 'false';
}
export const CardWrapper = styled.div<IProps>`
    display: flex;
    width: ${(props) => (props.fullWidth === 'true' ? '100%' : '85%')};
    padding: 10px 0px;
    margin: 0 auto;
`;
export const CardContent = styled.div`
    width: 100%;
`;
export const CardHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const DeletedButton = styled.button`
    cursor: pointer;
    width: 95px;
    padding: 5px;
    color: white;
    border: none;
    background-color: #f50057;
    outline: none;
`;
