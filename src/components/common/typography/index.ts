import { Colors } from '@styles';
import styled, { css } from 'styled-components';

export const Text = styled.p(
	({ theme: { fontSizes, space } }) => css`
		font-size: ${fontSizes.base};
		margin: ${space.md} 0;
		word-break: break-all;
	`
);

export const Subtitle = styled.p<{
	type?: 'subtitle-1' | 'subtitle-2' | 'subtitle-3';
}>(
	({ type, theme: { fontSizes, fontWeights } }) => css`
		font-size: ${fontSizes.lg};

		${(() => {
			switch (type) {
				case 'subtitle-2':
					return css`
						font-weight: ${fontWeights.bold};
					`;
				case 'subtitle-3':
					return css`
						font-size: ${fontSizes.base};
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
	type?: 'big' | 'medium' | 'small';
	underline?: boolean;
	underlineColor?: '0' | '1' | '2' | Colors;
	color?: '0' | '1' | '2' | Colors;
};

export const Title = styled.h1<TitleProps>(
	({
		type,
		underline,
		color,
		underlineColor,
		theme: { space, colors, fontSizes, fontWeights }
	}) => css`
		font-size: ${fontSizes['3xl']};
		line-height: 1.5;
		color: ${['0', '1', '2'].includes(color)
			? colors.blue[color]
			: colors[color ?? 'text']};

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
				background: ${['0', '1', '2'].includes(underlineColor)
					? colors.blue[underlineColor]
					: (underlineColor && colors[underlineColor]) || colors.blue[0]};
			}
		`}

		${(() => {
			switch (type) {
				case 'big':
					return css`
						font-weight: ${fontWeights['extra-bold']};
					`;
				case 'medium':
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
