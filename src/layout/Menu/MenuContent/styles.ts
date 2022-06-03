import styled, { css, keyframes } from 'styled-components';

const scaleAn = keyframes`
	0% {
		transform: scale(0);
	}
	80% {		
		transform: scale(1.1);
	}
	90% {		
		transform: scale(1.05);
	}
	100% {
		transform: scale(1);
	}
`;

export const MenuContentContainer = styled.main`
	min-height: 230px;
	max-width: 330px;
	position: absolute;

	overflow-y: auto;
	overflow-x: hidden;

	${({ theme: { colors, space, transitions } }) => css`
		animation: ${scaleAn} ${transitions.normal} ease-in;
		transform-origin: top left;
		width: calc(100% - 2 * ${space.md});
		top: ${space.lg};
		background: ${colors.menu};
		padding: ${space.md};
		padding-top: calc(3 * ${space.md});

		z-index: 100;
	`}
`;

export const Header = styled.header`
	${({ theme }) => css`
		margin-top: calc(3 * ${theme.space.md});

		a {
			margin-left: ${theme.space.md};
			color: ${theme.colors.text};
			display: inline-block;
			font-size: 20px;
			cursor: pointer;

			:last-of-type {
				margin-left: calc(2 * ${theme.space.md});
			}
		}
	`};
`;
