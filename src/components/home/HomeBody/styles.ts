import styled, { css } from 'styled-components';

export const HomeBodyContainer = styled.main(
	({ theme: { space } }) => css`
		padding: ${space.md} calc(3 * ${space.md}) calc(3 * ${space.md})
			calc(3 * ${space.md});

		min-height: 100vh;

		& > .intro {
			max-width: 400px;
			display: grid;

			.intro-content {
				margin-top: ${space.lg};
				margin-bottom: calc(2 * ${space.lg});
			}
		}

		& > .awesome-things {
			margin-top: calc(4 * ${space.lg});

			.awesome-intro {
				max-width: 400px;
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
