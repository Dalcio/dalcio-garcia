import styled, { css } from 'styled-components';

export const HomeBodyContainer = styled.main`
	${({ theme: { space, sizes, media } }) => css`
		& > .intro {
			max-width: ${sizes['w-700']};
			display: grid;

			.intro-content {
				margin-top: ${space.lg};
				margin-bottom: calc(2 * ${space.lg});
			}
		}

		& > .awesome-things {
			margin-top: calc(4 * ${space.lg});

			.awesome-intro {
				max-width: ${sizes['w-700']};
				margin-top: ${space.lg};
				margin-bottom: calc(2 * ${space.lg});
			}

			.the-things {
				display: grid;
				row-gap: calc(2 * ${space.lg});

				& > .article-from-home {
					${media.bp1} {
						grid-template-columns: auto 1fr;
						column-gap: ${space.lg};
					}
				}
			}
		}
	`}
`;
