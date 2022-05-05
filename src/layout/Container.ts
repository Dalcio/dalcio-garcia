import ROUTES, { Routes } from '@constants/routes';

import styled, { css } from 'styled-components';

const LayoutContainer = styled.div<{ page: Routes }>`
	${({ page, theme: { space, colors, sizes, borders, media } }) => css`
		width: 100%;
		max-width: ${sizes['w-max']};
		background: red;
	`}
`;

export default LayoutContainer;
