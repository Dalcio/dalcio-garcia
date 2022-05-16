import ROUTES, { Routes } from '@constants/routes';
import { Theme } from '@styles/theme';

import styled, { css } from 'styled-components';

const borderAxys = ({ space, zIndices, borders }: Theme) => css`
	& > .border-axys {
		position: fixed;
		inset: calc(2 * ${space.md});
		z-index: ${zIndices['z-50']};
	}
	& > .border-x {
		border-right: ${borders['hand-drawn-1']};
		left: calc(2 * ${space.md} + 1px);
		right: unset;
	}
	& > .border-axys:after {
		content: '';
		position: fixed;
		inset: calc(2 * ${space.md});
		z-index: ${zIndices['z-50']};
	}
	& > .border-x:after {
		border-right: ${borders['hand-drawn-1']};
		left: unset;
	}
	& > .border-y,
	& > .border-y:after {
		border-top: ${borders['hand-drawn-1']};
	}
	& > .border-y {
		bottom: unset;
	}
	& > .border-y:after {
		top: unset;
	}
`;

const diagonalAxys = (
	{ space, colors, zIndices, borders }: Theme,
	page: Routes
) => css`
	& > .diagonal-axys {
		position: fixed;
		z-index: ${zIndices['z-50']};
	}
	& > .top-diagonal {
		z-index: 100 !important;
		height: calc(${space.md} + 1px);
		top: calc(${space.md} - 1px);
		right: calc(3 * ${space.md});
		left: ${space.md};
	}
	& > .diagonal-axys:after {
		content: '';
		position: fixed;
		z-index: 200;
	}
	& > .top-diagonal:after {
		z-index: -100 !important;
		top: ${space.md};
		bottom: calc(3 * ${space.md});
		width: ${space.md};
	}
	& > .bottom-diagonal {
		right: ${space.md};
		bottom: ${space.md};
		left: calc(3 * ${space.md});
		height: ${space.md};
		background: ${colors.white};
	}
	& > .bottom-diagonal:after {
		top: calc(3 * ${space.md});
		right: ${space.md};
		bottom: ${space.md};
		width: ${space.md};
	}
	& > .bottom-diagonal,
	& > .top-diagonal:after {
		border-bottom: ${borders['hand-drawn-1']};
		border-left: ${borders['hand-drawn-1']};
	}
	& > .top-diagonal,
	& > .bottom-diagonal:after {
		border-top: ${borders['hand-drawn-1']};
		border-right: ${borders['hand-drawn-1']};
	}
	&,
	& > .top-diagonal,
	& > .top-diagonal:after {
		background: ${colors[ROUTES[page] ?? 'home']};
	}
`;

const LayoutContainer = styled.div<{ page: Routes }>`
	${({ page, theme }) => css`
		width: 100%;
		max-width: ${theme.sizes['w-max']};
		& > header,
		& > main {
			padding: calc(8 * ${theme.space.md}) calc(3 * ${theme.space.md});
			background: ${theme.colors[ROUTES[page] ?? 'home']};
			min-height: 100vh;
		}
		${borderAxys(theme)};
		${diagonalAxys(theme, page)};
	`}
`;

export default LayoutContainer;
