import { globalCss } from './stitches.config';

export default globalCss({
	'*': { margin: 0, padding: 0, boxSizing: 'border-box' },
	body: {
		background: '$white',
		color: '$text',
		font: '$fontSizes$tiny $fonts$untitled',
		height: '100vh',
		display: 'grid',
		justifyItems: 'center',
		alignItems: 'center',
		overflow: 'hidden',
		padding: '$md',
		// breakpoint
		'@bp1': {
			padding: '$lg'
		},
		// root
		'& > div': {
			position: 'relative',
			display: 'flex',
			height: '100%',
			width: '100%',
			maxWidth: '$w-max',
			maxHeight: '$h-max'
		}
	}
});
