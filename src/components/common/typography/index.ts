import styled, { css } from 'styled-components';

export const Text = styled.p(
	({ theme: { fontSizes } }) => css`
		font-size: ${fontSizes.base};
	`
);

export const Subtitle = styled.p<{ type?: 'subtitle-1' | 'subtitle-2' }>(
	({ type, theme: { fontSizes, fontWeights } }) => css`
		font-size: ${fontSizes.lg};

		${(() => {
			switch (type) {
				case 'subtitle-2':
					return css`
						font-weight: ${fontWeights.bold};
					`;
				default:
					return css`
						font-weight: ${fontWeights.normal};
					`;
			}
		})()}
	`
);

export const Title = styled.p<{ type?: 'big' | 'meddium' }>(
	({ type, theme: { fontSizes, fontWeights } }) => css`
		font-size: ${fontSizes['3xl']};

		${(() => {
			switch (type) {
				case 'big':
					return css`
						font-weight: ${fontWeights['extra-bold']};
					`;
				case 'meddium':
					return css`
						font-weight: 600;
					`;
				default:
					return css`
						font-weight: ${fontWeights.bold};
					`;
			}
		})()}
	`
);
