import ROUTES, { Routes } from '@constants/routes';
import styled, { css } from 'styled-components';

export type ButtonProps = {
	bg?: Routes;
};

const ButtonContainer = styled.button<ButtonProps>`
	${({
		bg,
		theme: { colors, radii, space, borders, transitions, letterSpacings }
	}) => css`
		background: none;
		cursor: pointer;
		outline: none;
		border: none;

		& * {
			text-decoration: none !important;
			color: ${colors.text} !important;
		}

		position: relative;

		&:after {
			content: '';
			position: absolute;
			z-index: 1;
			width: 100%;
			height: 100%;
			bottom: -${space.sm};
			right: -${space.sm};
			border: ${borders['hand-drawn-1']};
			border-radius: ${radii['round-md']};
			// background: ${colors[ROUTES[bg] ?? 'home']};
			background: ${colors.white};
			transition: all ${transitions.fast} ease;
		}

		&:hover,
		&:active {
			&:after {
				bottom: -2px;
				right: -2px;
			}
		}

		& > .btn-content {
			height: 100%;
			width: 100%;
			padding: ${space.md};
			letter-spacing: ${letterSpacings.wide};
			text-transform: uppercase;
			text-align: center;
			position: relative;
			z-index: 2;
			background: ${colors[`on-${ROUTES[bg] ?? 'home'}`]};
			border-radius: ${radii['round-md']};
			border: ${borders['hand-drawn-1']};
			color: ${borders['hand-drawn-1']};
		}
	`}
`;

const Button = ({ children, ...props }) => (
	<ButtonContainer {...props}>
		<div className="btn-content">{children}</div>
	</ButtonContainer>
);

export default Button;
