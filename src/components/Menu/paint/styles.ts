import styled, { css } from 'styled-components';

import { slideVertical } from './animations';
import { RoleParams } from './types';

const role: RoleParams = (name, colors, params) => css`
	.role-${name} {
		background: ${colors[name]};
		animation: ${slideVertical(params)} 2s ease-in-out;
	}
`;

export const PaintContainer = styled.div`
	background: ${({ theme }) => theme.colors.menu};
	height: 100%;
	width: 100%;
	overflow: hidden;
	display: grid;
	grid-template-columns: repeat(4, 1fr);

	${({ theme: { colors } }) => css`
		${role('home', colors, ['-110%', '110%'])};
		${role('about', colors, ['110%', '-110%'])};
		${role('works', colors, ['-110%', '110%'])};
		${role('articles', colors, ['110%', '-110%'])};
	`};
`;
