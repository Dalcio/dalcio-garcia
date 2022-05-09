import { keyframes } from 'styled-components';

export const fadeInLeftToRight = keyframes`
from {
   right: 100%;
 }
 to {
   right: 0;
 }
`;

export const rotateLetter = keyframes`
from {
   transform: rotateX(0)
 }
 to {
   transform: rotateX(-360deg)
 }
`;
