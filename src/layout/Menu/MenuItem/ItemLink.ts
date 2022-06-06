import styled, { css } from 'styled-components';

const ItemLink = styled.a`
	cursor: pointer;
	display: inline-block;
	letter-spacing: 4px;
	font-size: 1.5rem;

	&:hover:not(.is-active) {
		opacity: 0.6;
	}

	& > span:first-of-type {
		text-transform: capitalize;
	}

	${({ theme: { colors, transitions, space, media, radii } }) => css`
		transition: font-size ${transitions.fast} ease-in;

		${media.bp1} {
			font-size: 1.9rem;
		}

		&.is-active {
			cursor: unset;
			width: 100%;
			background: ${colors.blue[0]};
			padding-left: ${space.md};
			border-radius: ${radii.sm};
			position: relative;
			z-index: 1;
		}
	`};
`;

export default ItemLink;
