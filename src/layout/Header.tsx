import { Button } from '@components/common';
import ROUTES, { Routes } from '@constants/routes';

import styled, { css } from 'styled-components';

import Menu from './Menu';

const Wrapper = styled.div<{ page: Routes }>(
	({ page, theme: { colors, media, space, sizes } }) => css`
		position: fixed;
		left: calc(2 * ${space.md});
		right: calc(2 * ${space.md});

		padding: ${space.lg} ${space.md} ${space.sm} ${space.md};

		background: ${colors[ROUTES[page] ?? 'home']};

		display: flex;
		justify-content: center;

		${media.bp1} {
			padding: ${space.lg} ${space.lg} inherit ${space.md};
		}

		.header-container {
			width: min(${sizes['w-max']}, 100%);
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
		}
	`
);

export default function Header({ page }: { page: Routes }) {
	return (
		<Wrapper page={page}>
			<div className="header-container">
				<Menu />
				<Button
					onClick={() => {
						alert('Hi');
					}}
					bg={page}
				>
					My Resume
				</Button>
			</div>
		</Wrapper>
	);
}
