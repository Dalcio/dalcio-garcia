import { globalCss } from './stitches.config';

export default globalCss({
	'*': {
		margin: 0,
		padding: 0,
		boxSizing: 'border-box'
	},
	body: {
		background: '$white',
		color: '$text',
		font: '$fontSizes$tiny $fonts$untitled',
		height: '100vh',
		overflow: 'hidden'
	}
});
