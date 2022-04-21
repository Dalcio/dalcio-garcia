import styled from 'styled-components';

import { InnerLayoutWrapperProps, OuterLayoutWrapperProps } from './types';

export const OuterLayoutWrapper = styled.div<OuterLayoutWrapperProps>`
	background: ${({ bg, theme }) => theme.colors[bg]};
	margin: ${({ home, theme }) => theme.space[(home && 'md') || 'sm']};
	${({ home, theme }) =>
		!home && `padding: ${theme.space.sm} ${theme.space.sm} 0 0`};
	height: calc(
		100vh - 2 * ${({ home, theme }) => theme.space[(home && 'md') || 'sm']}
	);
`;

export const InnertLayoutWrapper = styled.div<InnerLayoutWrapperProps>`
	background: ${({ bg, theme }) => theme.colors[bg]};
	border-top: 1px solid ${({ theme }) => theme.colors.white};
	border-right: 1px solid ${({ theme }) => theme.colors.white};
	height: 100%;

	position: relative;
	overflow: hidden;
`;
