import { keyframes } from 'styled-components';

export const apeerLetter = keyframes`
from {
  transform: translateY(12px);
}
to {
  transform: translateY(0);
}
`;

export const strechLeftRight = keyframes`
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(2) ;
  }
  100% {
    transform:  translateX(12px) scaleX(1);
  }
`;
