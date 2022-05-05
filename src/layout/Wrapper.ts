import ROUTES, { Routes } from '@constants/routes';
import styled from 'styled-components';

const LayoutWrapper = styled.div<{ page: Routes }>`
	min-height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ page, theme: { colors } }) =>
		colors[ROUTES[page] ?? 'home']};
`;

export default LayoutWrapper;
