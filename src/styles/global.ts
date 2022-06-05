import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle(
	({ theme: { colors, fontSizes, fonts, space } }) => css`
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			line-height: 1.65;
		}

		body {
			background: ${colors.white};
			color: ${colors.text};
			font: ${fontSizes.tiny} ${fonts.untitled};
			overflow-x: hidden !important;
		}
	`
);

export default GlobalStyles;
