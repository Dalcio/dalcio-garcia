import { Button } from '@components/common';
import { Routes } from '@constants/routes';

import styled from 'styled-components';

import Menu from './Menu';

const Container = styled.div<{ page: Routes }>(
	({ page, theme: { colors, media, space } }) => ({
		position: 'absolute',
		inset: space.md,
		[media.bp1]: {
			inset: space.lg
		},
		bottom: 'unset!important',

		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		background: colors[page],
		'& >.*': {
			position: 'fixed'
		}
	})
);

const Header = ({ page }: { page: Routes }) => (
	<Container page={page}>
		<Menu />
		<Button
			onClick={() => {
				alert('Hi');
			}}
			bg={page}
		>
			My Resume
		</Button>
	</Container>
);

export default Header;
