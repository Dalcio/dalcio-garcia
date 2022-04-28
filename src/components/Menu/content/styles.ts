import styled from 'styled-components';

export const MenuContentContainer = styled.main`
	background: ${({ theme }) => theme.colors.menu};
	height: 100%;
	padding: ${({ theme }) => theme.space.md};
	padding-top: calc(3 * ${({ theme }) => theme.space.md});
	overflow: auto;
`;

export const MenuNav = styled.ul`
	list-style: none;
	display: grid;
	row-gap: ${({ theme }) => theme.space.sm};
	margin-top: ${({ theme }) => `calc(2 * ${theme.space.md})`};
	padding-left: ${({ theme }) => theme.space.md};

	li {
		position: relative;
	}
`;
