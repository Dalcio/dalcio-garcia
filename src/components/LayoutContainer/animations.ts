import { keyframes, Keyframes } from 'styled-components';

import { NotHomeProps } from './types';

export const fadeOut: NotHomeProps<Keyframes> = ({
	space,
	colors,
	bg,
	home
}) => keyframes`
	from {
		position: fixed;
		height: ${space[home ? 'md' : 'sm']};
		top: calc(100vh - ${space[home ? 'md' : 'sm']});
		background: ${colors.white};
	}
	to {
		height: 0;
		top: 100vh;
		background: ${colors[bg]};
	}
`;

export const slideToTop = (top: string) => keyframes`
	from {
		top: 0;
	}
	to {
		top: -${top};
	}
`;
