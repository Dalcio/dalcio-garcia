import { keyframes } from 'styled-components';

export const slideVertical = (params: string[]) => keyframes`
  0% {
    opacity: 0;
    transform: translateY(${params[0]});
  }

  50% {
      opacity: 1;
      transform: translateY(${params[1]});
  }
  
  100% {
    opacity: 0;
    transform: translateY(${params[0]});
  }
`;
