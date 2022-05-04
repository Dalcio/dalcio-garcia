import { styled } from '@styles';
import type * as Stitches from '@stitches/react';

const LayoutContainer = styled('div', {
	width: '100%',
	position: 'relative',
	border: '$borders$hand-drawn-2',
	borderRadius: '$hand-drawn',
	padding: '$md',
	'@bp1': {
		padding: '$lg'
	},
	'&:after': {
		$$inset: 'calc($space$md - 2px)',
		content: '',
		position: 'absolute',
		height: '100%',
		width: '100%',
		top: '-$$inset',
		right: '-$$inset',
		border: '$borders$hand-drawn-2',
		borderRadius: '$hand-drawn'
	},
	variants: {
		page: {
			home: {
				background: '$home'
			},
			community: {
				background: '$community'
			},
			about: {
				background: '$about'
			},
			work: {
				background: '$work'
			}
		}
	}
});

export type LayoutContainerVariantProps = Stitches.VariantProps<
	typeof LayoutContainer
>;

export default LayoutContainer;
