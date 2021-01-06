import styled from "styled-components";

export const PreviewWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
    padding-bottom: 60px;
`;

export const PriceContent = styled.div`
    display: inline-flex;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid rgba(0, 0, 0, 0.54);
    margin-bottom: 35px;
`;

export const PreviewLeftContent = styled.div`
    width: 50%;
`;
export const PreviewRightContent = styled.div`
    width: 50%;
    align-self: flex-start;
`;

export const Image = styled.img``;

export const Title = styled.h3``;
export const Price = styled.h4`
    font-size: 24px;
    margin-right: 16px;
`;
export const OldPrice = styled.h5`
    font-size: 16px;
    text-decoration: line-through;
    color: rgba(0, 0, 0, 0.54);
`;
export const Text = styled.p`
    margin-bottom: 35px;
`;

export const SpanText = styled.span``;

export const CountText = styled.span`
    padding: 0 20px;
`;

export const CountWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 35px;
`;

export const CounterButton = styled.button`
    width: 25px;
    height: 25px;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 50%;
`;

export const ActionsWrapper = styled.div`
    display: flex;
    width: 75%;
    justify-content: space-between;
    margin-bottom: 35px;
`;
