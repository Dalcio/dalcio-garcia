import styled, { css } from 'styled-components';

const MenuNav = styled.ul`
	list-style: none;
	display: grid;

	${({ theme: { space } }) => css`
		row-gap: ${space.sm};
		margin-top: ${`calc(2 * ${space.md})`};
		padding-left: ${space.md};
	`}

	li {
		position: relative;
	}
`;

export default MenuNav;
