import styled, { css } from 'styled-components';

const HeaderContainer = styled.div(
	({ theme: { space, sizes } }) => css`
		display: grid;
		align-content: center;
		max-width: ${sizes['w-700']};
		row-gap: calc(2 * ${space.md});
	`
);

export default HeaderContainer;
