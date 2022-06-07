import styled, { css } from 'styled-components';

export const HomeBodyContainer = styled.div`
	${({ theme: { space, sizes, media } }) => css`
		.self-intro {
			margin-bottom: calc(2 * ${space.lg});
		}

		& > .intro {
			max-width: ${sizes['w-max']};
			display: grid;

			.intro-content {
				margin-top: ${space.lg};
				margin-bottom: calc(2 * ${space.lg});
			}
		}

		& > .awesome-things {
			margin-top: calc(4 * ${space.lg});

			.the-things {
				display: grid;
				row-gap: calc(2 * ${space.lg});
				margin-top: calc(2 * ${space.lg});

				& > .article-from-home {
					${media.bp1} {
						grid-template-columns: auto 1fr;
						column-gap: ${space.lg};
					}
				}
			}
		}
		@media screen and (min-width: 400px) {
			.self-intro {
				display: none;
			}
		}
	`}
`;
