import styled, { css } from 'styled-components';

export const HomeBodyContainer = styled.main(
	({ theme: { space, sizes } }) => css`
		& > .intro {
			max-width: ${sizes['w-500']};
			display: grid;

			.intro-content {
				margin-top: ${space.lg};
				margin-bottom: calc(2 * ${space.lg});
			}
		}

		& > .awesome-things {
			margin-top: calc(4 * ${space.lg});

			.awesome-intro {
				max-width: ${sizes['w-500']};
				margin-top: ${space.lg};
				margin-bottom: calc(2 * ${space.lg});
			}

			.the-things {
				display: grid;
				row-gap: calc(2 * ${space.lg});
			}
		}
	`
);
