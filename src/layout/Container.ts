import ROUTES, { Routes } from '@constants/routes';

import styled, { css } from 'styled-components';

const LayoutContainer = styled.div<{ page: Routes }>`
	${({ page, theme: { space, colors, sizes, borders, media } }) => css`
		width: calc(100% - 4 * ${space.md});
		height: calc(100% - 4 * ${space.md});
		/* max-width: ${sizes['w-max']};
		max-height: ${sizes['h-max']}; */

		padding: ${space.md};
		border: ${borders['hand-drawn-1']};
		background: ${colors[ROUTES[page] ?? 'home']};
	`}
`;

export default LayoutContainer;
