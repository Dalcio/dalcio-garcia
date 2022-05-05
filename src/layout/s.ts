import ROUTES, { Routes } from '@constants/routes';

import styled, { css } from 'styled-components';

const LayoutContainer = styled.div<{ page: Routes }>`
	${({ page, theme: { space, colors, sizes, borders, media } }) => css`
		width: calc(100% - 4 * ${space.md});
		height: calc(100% - 4 * ${space.md});
		max-width: ${sizes['w-max']};
		max-height: ${sizes['h-max']};

		padding: ${space.md};
		border: ${borders['hand-drawn-1']};
		background: ${colors[ROUTES[page] ?? 'home']};

		position: relative;

		${media.bp1} {
			padding: ${space.lg};
		}

		&:after,
		&:before {
			content: '';
			position: absolute;
			z-index: -1;
			height: 100%;
			width: 100%;
			border: ${borders['hand-drawn-1']};
		}

		&:before {
			top: -${space.md};
			left: -${space.md};
			background: ${colors[ROUTES[page] ?? 'home']};
		}

		&:after {
			bottom: -${space.md};
			right: -${space.md};
		}
	`}
`;

export default LayoutContainer;
