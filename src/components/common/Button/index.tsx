import ROUTES, { Routes } from '@constants/routes';
import styled, { css } from 'styled-components';

const ButtonContainer = styled.button`
	${({
		theme: { colors, radii, space, borders, transitions, letterSpacings }
	}) => css`
		background: none;
		cursor: pointer;
		outline: none;
		border: none;
		height: 46px;

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
			bottom: -${space.md};
			right: -${space.md};

			background: ${colors.blue[0]};
			border-radius: ${radii.sm};
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
			background: ${colors.blue[1]};
			border-radius: ${radii.sm};
			color: ${colors.onBackground};

			display: grid;
			place-items: center;

			& > * {
				display: block;
				width: 100%;
				color: pink: !important;;			}
		}
	`}
`;

const Button = ({ children }) => (
	<ButtonContainer>
		<div className="btn-content">{children}</div>
	</ButtonContainer>
);

export default Button;
