import { css, keyframes } from "styled-components";

export const fadeIn = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${fadeInKeyFrames} ${type};
  `;

const fadeInKeyFrames = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }

    to{
        filter: blur(0);
        opacity: 1;
    }

`;

export const fadeOut = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${fadeOutKeyFrames} ${type};
  `;

const fadeOutKeyFrames = keyframes`
    from{
        filter: blur(0);
        opacity: 1;
    }
    to{
        filter: blr(5px);
        opacity: 0;
    }
`;
