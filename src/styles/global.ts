import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle(
	({ theme: { colors, fontSizes, fonts, space } }) => css`
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		body {
			background: ${colors.white};
			color: ${colors.text};
			font: ${fontSizes.tiny} ${fonts.untitled};

			&:before,
			&:after {
				content: '';
				position: fixed;
				background: ${colors.white};
				top: 0;
				bottom: 0;
				width: calc(2 * ${space.md});
			}
			&:before {
				left: 0;
			}
			&:after {
				right: 0;
			}
		}
	`
);

export default GlobalStyles;
