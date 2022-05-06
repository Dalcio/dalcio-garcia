import ROUTES, { Routes } from '@constants/routes';
import styled, { css } from 'styled-components';

const LayoutWrapper = styled.div<{ page: Routes }>(
	({ page, theme: { space, colors } }) => css`
		background: ${colors.white};
		padding: calc(2 * ${space.md});
		display: flex;
		justify-content: center;

		&:before,
		&:after {
			content: '';
			position: fixed;
			background: ${colors.white};
			left: 0;
			right: 0;
			height: calc(2 * ${space.md});
		}
		&:before {
			top: 0;
		}
		&:after {
			bottom: 0;
		}
	`
);

export default LayoutWrapper;
