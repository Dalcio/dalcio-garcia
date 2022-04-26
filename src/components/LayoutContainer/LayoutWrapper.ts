import styled, { css } from 'styled-components';

import { fadeOut, slideToTop } from './animations';
import { LayoutWrapperProps, NotHomeProps } from './types';

const notHome: NotHomeProps = ({ space, colors, bg, durations }) => css`
	margin: ${space.sm};
	margin-top: calc(2 * ${space.sm});
	min-height: calc(100vh - 1px - 3 * ${space.sm});
	position: relative;

	&::before {
		content: '';
		position: absolute;
		border: 1px solid ${colors[bg]};
		z-index: -1;
		top: -${space.sm};
		right: ${space.sm};
		left: ${space.sm};
		height: ${space.sm};

		animation: ${slideToTop(space.sm)} ${durations[3]} ease-in;
	}
`;

const LayoutWrapper = styled.div<LayoutWrapperProps>`
	background: ${({ bg, theme }) => theme.colors[bg]};
	transition: margin ${({ theme }) => theme.durations[3]} ease-in;

	&:after {
		content: '';
		position: fixed;
		background: ${({ theme }) => theme.colors.white};
		z-index: 1;
		inset: 0;
		top: calc(100vh - ${({ home, theme }) => theme.space[home ? 'md' : 'sm']});
		height: ${({ home, theme }) => theme.space[home ? 'md' : 'sm']};
	}

	&.not-scrolled {
		${({ home, bg, theme: { colors, space, durations } }) =>
			(home &&
				css`
					margin: ${space.md};
					min-height: calc(100vh - 2 * ${space.md});
				`) ||
			notHome({ space, colors, bg, durations })};
	}

	&.scrolled:after {
		position: static;
		${({ home, bg, theme: { colors, space, durations } }) => css`
			animation: ${fadeOut({ space, colors, bg, home })} ${durations[3]} ease-in;
		`}
	}
`;

export default LayoutWrapper;
