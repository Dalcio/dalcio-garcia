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

type TitleProps = {
	type?: 'big' | 'meddium' | 'small';
	underline?: boolean;
};

export const Title = styled.p<TitleProps>(
	({
		type,
		underline,
		theme: { space, colors, fontSizes, fontWeights }
	}) => css`
		font-size: ${fontSizes['3xl']};

		${underline &&
		css`
			margin-bottom: calc(2 * ${space.md});

			&:after {
				display: block;
				content: '';
				position: absolute;
				height: 3px;
				width: 10%;
				margin-top: ${space.md};
				background: ${colors.text};
			}
		`}

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
				case 'small':
					return css`
						font-weight: 600;
						font-size: ${fontSizes['2xl']};
					`;
				default:
					return css`
						font-weight: ${fontWeights.bold};
					`;
			}
		})()}
	`
);
