import ROUTES, { Routes } from '@constants/routes';
import styled, { css } from 'styled-components';

export type ButtonProps = {
	bg?: Routes;
	size?: 'small' | 'medium' | 'arge';
};

const ButtonContainer = styled.button<ButtonProps>`
	${({ size, bg, theme: { colors, space, borders, letterSpacings } }) => css`
		background: none;
		cursor: pointer;
		outline: none;
		border: none;

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
			background: ${colors[ROUTES[bg] ?? 'home']};
			transition: all 0.5s ease;
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
			letter-tpacing: ${letterSpacings.wide};
			text-transform: uppercase;
			text-align: center;
			position: relative;
			z-index: 2;
			background: ${colors[ROUTES[bg] ?? 'home']};
			border: ${borders['hand-drawn-1']};
		}
	`}
`;

const Button = ({ children, ...props }) => (
	<ButtonContainer {...props}>
		<div className="btn-content">{children}</div>
	</ButtonContainer>
);

export default Button;
