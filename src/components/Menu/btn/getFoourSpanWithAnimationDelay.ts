import { css } from 'styled-components';

const getFoourSpanWithAnimationDelay = () => {
	let str = '';

	for (let i = 2, delay = 0; i <= 5; i++, delay += 60)
		str += `
      & > span:nth-of-type(${i}) {
        animation-delay: ${delay}ms;
      }
  `;

	return css`
		${str}
	`;
};

export default getFoourSpanWithAnimationDelay;
