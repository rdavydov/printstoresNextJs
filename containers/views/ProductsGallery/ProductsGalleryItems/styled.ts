import styled from 'styled-components';

export const GalleryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
`;

export const GalleryWrapper = styled.div`
    display: block;
    padding: 40px 0;
`;

export const Title = styled.h3`
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 18px;
`;

interface IProps {
    end: number | null;
    start: number | null;
}

export const GaleryHeader = styled.div<IProps>`
    display: flex;
    justify-content: space-between;
    & svg {
        cursor: pointer;
    }
    & svg:nth-child(1) {
        fill: ${(props) => (props.start ? 'gray' : 'inherit')};
        transform: rotate(180deg);
    }
    & svg:nth-child(2) {
        fill: ${(props) => (props.end ? 'gray' : 'inherit')};
    }
`;
