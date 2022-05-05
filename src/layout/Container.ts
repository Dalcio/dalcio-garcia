import { styled } from '@styles';
import { pageVariants } from '@styles/variants';
import type * as Stitches from '@stitches/react';

const LayoutContainer = styled('div', {
	width: 'calc(100% - 4 * $space$md)',
	height: 'calc(100% - 4 * $space$md)',
	maxWidth: '$w-max',
	maxHeight: '$h-max',
	border: '$borders$hand-drawn-1',
	position: 'relative',
	padding: '$md',
	'@bp1': {
		padding: '$lg'
	},
	'&:after, &:before': {
		content: '',
		$$inset: '$space$md',
		position: 'absolute',
		zIndex: '-1',
		height: '100%',
		width: '100%',
		border: '$borders$hand-drawn-1'
	},
	'&:before': {
		bottom: '-$$inset',
		right: '-$$inset'
	},
	'&:after': {
		top: '-$$inset',
		left: '-$$inset',
		background: '$home'
	},
	variants: {
		page: {
			...pageVariants,
			articles: {
				'&:after': {
					background: '$articles'
				}
			},
			about: {
				'&:after': {
					background: '$about'
				}
			},
			work: {
				'&:after': {
					background: '$work'
				}
			}
		}
	},
	defaultVariants: {
		page: 'home'
	}
});

export type PageVariantProps = Stitches.VariantProps<typeof LayoutContainer>;

export default LayoutContainer;
