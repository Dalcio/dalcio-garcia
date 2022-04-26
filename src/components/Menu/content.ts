import styled from 'styled-components';

const MenuContent = styled.main`
	background: ${({ theme }) => theme.colors.menu};
	height: 100%;
	padding: ${({ theme }) => theme.space.md};
	padding-top: calc(3 * ${({ theme }) => theme.space.md});
`;

export default MenuContent;
