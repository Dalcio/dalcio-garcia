import { Button } from '@components/common';
import { styled } from '@styles';
import { pageVariants } from '@styles/variants';

import { PageVariantProps } from './Container';

import Menu from './Menu';

const Container = styled('div', {
	position: 'absolute',
	inset: '$md',
	'@bp1': {
		inset: '$lg'
	},
	bottom: 'unset',

	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',

	'& >.*': {
		position: 'fixed'
	},
	variants: {
		page: {
			...pageVariants
		}
	},
	defaultVariants: {
		page: 'home'
	}
});

const Header = ({ page }: PageVariantProps) => (
	<Container page={page}>
		<Menu />
		<Button
			onClick={() => {
				alert('Hi');
			}}
			page={page}
		>
			My Resume
		</Button>
	</Container>
);

export default Header;
