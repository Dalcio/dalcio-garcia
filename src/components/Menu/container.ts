import styled from 'styled-components';

export const MenuContainer = styled.div<{ home: boolean }>`
	position: fixed;
	inset: ${({ home, theme }) => theme.space[home ? 'md' : 'sm']};
`;
