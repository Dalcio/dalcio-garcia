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

export const MenuContentContainer = styled.div`
	position: relative;
	position: absolute;

	${({ theme: { colors, space, transitions, radii } }) => css`
		width: calc(100vw - 4 * ${space.lg} - ${space.md});
		max-width: 340px;
		top: calc(2 * ${space.lg});

		.container {
			min-height: 230px;
			position: relative;

			overflow-y: auto;
			overflow-x: hidden;

			animation: ${scaleAn} ${transitions.normal} ease-in;
			transform-origin: top left;

			border-radius: ${radii.sm};
			background: ${colors.secondaryBackground};
			z-index: 10;
			width: 100%;
			padding: ${space.md};
			padding-top: calc(3 * ${space.md});
		}

		.back-container {
			animation: ${scaleAn} ${transitions.normal} ease-in;
			transform-origin: top left;

			position: absolute;
			content: '';
			height: 100%;
			width: 100%;
			background: #fff;
			border-radius: ${radii.sm};
			right: -${space.md};
			bottom: -${space.md};
		}
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
