import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle(
	({ theme: { colors, fontSizes, fonts, space } }) => ({
		'*': {
			margin: 0,
			padding: 0,
			boxSizing: 'border-box'
		},
		body: {
			background: colors.white,
			color: colors.text,
			font: `'${fontSizes.tiny} ${fonts.untitled}`,
			height: '100vh',
			overflow: 'hidden',
			padding: `calc(100% - 4 * ${space.md})`
		}
	})
);

export default GlobalStyles;
