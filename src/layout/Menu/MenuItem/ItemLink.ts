import ROUTES, { Routes } from '@constants/routes';
import styled, { css } from 'styled-components';
import { rotateLetter, fadeInLeftToRight } from './keyframes';

const ItemLink = styled.a<{ color: Routes }>`
	cursor: pointer;
	display: inline-block;
	letter-spacing: 4px;
	font-size: 1.5rem;
	margin: 6px 0;

	&:hover:not(.is-active) {
		opacity: 0.6;
	}

	& > span:first-of-type {
		text-transform: capitalize;
	}

	${({ color, theme: { colors, transitions, space, media } }) => css`
		transition: font-size ${transitions.fast} ease-in;

		${media.bp1} {
			font-size: 1.9rem;
		}

		&.is-active {
			width: 100%;

			& > span {
				position: relative;
				z-index: 1;
				background: ${colors.menu};
				border: 1px solid ${colors[ROUTES[color] ?? 'home']};
			}

			& > span:first-of-type {
				display: inline-block;
				background: ${colors[ROUTES[color] ?? 'home']};
				color: ${colors.text};
				animation: ${rotateLetter} ${transitions.slow} ease-in;
			}

			&:after {
				content: '';
				position: absolute;
				inset: 0;
				right: ${space.md};
				border: 1px solid ${colors[ROUTES[color] ?? 'home']};
				background: ${colors[ROUTES[color] ?? 'home']};
				animation: ${fadeInLeftToRight} ${transitions.slow} ease-in;
			}
		}
	`};
`;

export default ItemLink;
