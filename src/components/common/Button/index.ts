import { styled } from '@styles';
import { pageVariants } from '@styles/variants';

const Button = styled('button', {
	border: '$borders$hand-drawn-1',
	position: 'relative',
	padding: '$sm',
	userSelect: 'none',
	cursor: 'pointer',
	letterSpacing: '$wide',
	textTransform: 'uppercase',
	textAlign: 'center',
	color: 'inherit',
	outline: 'none',
	zIndex: '10!important',

	'&:after': {
		content: '',
		$$inset: '$space$md',
		position: 'absolute',
		zIndex: '0',
		height: '100%',
		width: '100%',
		border: '$borders$hand-drawn-1',
		top: '-$$inset',
		left: '-$$inset',
		background: 'Red'
	},

	variants: {
		size: {
			small: {},
			medium: {},
			large: {}
		},
		page: {
			...pageVariants
		}
	},

	defaultVariants: {
		size: 'medium',
		page: 'home'
	}
});

export default Button;
