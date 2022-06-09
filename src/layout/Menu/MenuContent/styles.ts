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
	position: absolute;

	${({ theme: { colors, space, transitions, radii, sizes } }) => css`
		width: calc(100% - 4 * ${space.lg} - ${space.md});
		max-width: ${sizes['w-max']};
		height: calc(100vh - 4 * ${space.lg});
		top: calc(2 * ${space.lg});

		.container {
			height: 100%;
			width: 100%;
			position: relative;

			overflow-y: auto;
			overflow-x: hidden;

			animation: ${scaleAn} ${transitions.normal} ease-in;
			transform-origin: top left;

			border-radius: ${radii.sm};
			background: ${colors.secondaryBackground};
			z-index: 10;
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
		margin-top: calc(5 * ${theme.space.md});

		a {
			margin-left: ${theme.space.md};
			color: ${theme.colors.text};
			display: inline-flex;
			align-items: center;
			font-size: 20px;
			cursor: pointer;
			column-gap: ${theme.space.sm};
			text-decoration: none;

			& > * {
				display: inline-block;
			}

			:last-of-type {
				margin-left: calc(2 * ${theme.space.md});
			}

			:hover {
				color: ${theme.colors.blue[0]};
				text-decoration: underline;
				font-style: italic;
			}
		}
	`};
`;
