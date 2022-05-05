import { Button } from '@components/common';
import { Routes } from '@constants/routes';

import styled, { css } from 'styled-components';

import Menu from './Menu';

const Container = styled.div<{ page: Routes }>(
	({ page, theme: { colors, media, space } }) => css`
		position: fixed;
		inset: calc(2 * ${space.md});

		bottom: unset !important;

		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		background: ${colors[page]};

		&:after {
			content: '';
			position: absolute;
			inset: -1000%;
			bottom: -${space.lg};
			background: ${colors[page]};
		}

		${media.bp1} {
			inset: calc(4 * ${space.lg});
		}
	`
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
