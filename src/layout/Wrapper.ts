import ROUTES, { Routes } from '@constants/routes';
import styled, { css } from 'styled-components';

const LayoutWrapper = styled.div(
	({ theme: { space, colors, zIndices } }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		background: pink;
	`
);

export default LayoutWrapper;
