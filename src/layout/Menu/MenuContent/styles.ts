import styled, { css } from 'styled-components';

export const MenuContentContainer = styled.main`
	min-height: 230px;
	max-width: 330px;

	position: absolute;

	overflow-y: auto;
	overflow-x: hidden;

	${({ theme: { colors, space, media } }) => css`
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
