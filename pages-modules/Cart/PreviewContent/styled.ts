import styled from 'styled-components';

export const Title = styled.h2``;

export const PreviewCartWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 80px;
`;

export const PreviewCartInfo = styled.div`
    width: 50%;
    padding-right: 40px;
`;

export const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 550px;
    max-height: 550px;
    border: 2px solid #f0f0f5;
    border-radius: 15px;
    overflow: hidden;
    padding: 30px;
`;

export const CartHeader = styled.div`
    display: inline-flex;
    justify-content: space-between;
    margin-bottom: 45px;
`;

export const CartBody = styled.div`
    margin-bottom: 30px;
    overflow-y: auto;
    max-height: 400px;
`;

export const CartFooter = styled.div``;

export const CartInfoOrder = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #f0f0f5;
    padding: 15px 0;
`;

export const PreviewCartItems = styled.div``;

export const Image = styled.img``;

interface IProps {
    size?: 'small' | 'large' | 'xsmall';
}

export const Text = styled.p<IProps>`
    font-size: ${(props) => (props.size === 'small'
    ? '16px'
    : props.size === 'xsmall'
      ? '14px'
      : '18px')};
    font-weight: 700;
    margin: 0;
`;

export const SmallText = styled.p`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 5px;
`;

export const Price = styled.p`
    font-size: 15px;
    margin-right: 15px;
`;

export const SubSmallText = styled.p`
    font-size: 13px;
    font-weight: 600;
    margin: 0;
`;

export const FormActions = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const FormRadioHeader = styled.div`
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
`;

export const FormRadioContent = styled.div`
    width: 100%;
`;

export const DeliveryRadioContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
    padding: 25px 0;
`;
