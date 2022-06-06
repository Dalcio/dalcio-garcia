import styled, { css } from 'styled-components';

const HeaderContainer = styled.div(
	({ theme: { space, sizes } }) => css`
		display: grid;
		align-content: center;
		justify-items: start;
		max-width: ${sizes['w-max']};
		row-gap: calc(2 * ${space.md});

		& button {
			width: min(416px, 100%);

			.btn-content {
				background: #fff;
			}
		}
	`
);

export default HeaderContainer;
