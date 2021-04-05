import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
0% { 
    width: 0%;
    height: 0%;
}
100% { 
    width: 100%;
    height: 100%;
}
`;

const fadeOut = keyframes`
0% {
    width: 100%;
    height: 100%;
}
100% {
    width: 0%;
    height: 0%;
}
`;

interface OverlaySearchWrapperProps {
  fadeIn?: boolean;
  fadeOut?: boolean;
}

export const OverlaySearchWrapper = styled.div<OverlaySearchWrapperProps>`
  background-color: rgba(14, 14, 14, 0.9);
  width: 0%;
  height: 0%;
  position: fixed;
  top: 0;
  z-index: 10;
  ${(props) =>
    props.fadeIn &&
    css`
      animation: ${fadeIn} 0.5s 0s both;
    `};

  ${(props) =>
    props.fadeOut &&
    css`
      animation: ${fadeOut} 0.5s 0s both;
    `};
`;

const overlayFideIn = keyframes`
0% { 
    width: 0%;
    height: 0%;
}
100% { 
    width: 100%;
}
`;

const overlayFadeOut = keyframes`

0% {
    width: 100%;
}
100% {
    width: 0%;
    height: 0%;
}
`;

export const OverlaySearchContent = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const OverlayBoxInput = styled.div<OverlaySearchWrapperProps>`
  display: flex;
  justify-content: center;
  min-height: 40px;
  ${(props) =>
    props.fadeIn &&
    css`
      animation: ${overlayFideIn} 0.5s 0.5s both;
    `};

  ${(props) =>
    props.fadeOut &&
    css`
      animation: ${overlayFadeOut} 0.5s 0s both;
    `};
`;

const closeIconFadeIn = keyframes`
0% {
    font-size: 0px;
}
100% {
    font-size: 40px;
}
`;

const closeIconFadeOut = keyframes`
0% {
    fontSize: 40px;
}
100% {
    fontSize: 0px;
}
`;

export const OverlaySearchClose = styled.div<OverlaySearchWrapperProps>`
  position: absolute;
  top: 20px;
  right: 30px;
  color: white;
  cursor: pointer;
  ${(props) =>
    props.fadeIn &&
    css`
      animation: ${closeIconFadeIn} 0.9s 0.5s both;
    `};

  ${(props) =>
    props.fadeOut &&
    css`
      animation: ${closeIconFadeOut} 0.5s 0s both;
    `}
`;
