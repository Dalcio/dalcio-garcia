import { Subtitle } from '@components/common';
import ROUTES, { Routes } from '@constants/routes';
import { theme } from '@styles';

import styled, { css } from 'styled-components';

import Menu from './Menu';

const Wrapper = styled.div<{ page: Routes }>(
	({ page, theme: { colors, media, space, sizes, zIndices } }) => css`
		position: fixed;
		z-index: ${zIndices['z-20']};
		left: calc(2 * ${space.md});
		right: calc(2 * ${space.md});

		background: ${colors[ROUTES[page] ?? 'home']};

		display: flex;
		justify-content: center;

		& > .header-container {
			width: 100%;
			max-width: ${theme.sizes['w-max']};
			padding: ${space.lg} calc(3 * ${theme.space.md});

			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	`
);

export default function Header({ page }: { page: Routes }) {
	return (
		<Wrapper page={page}>
			<div className="header-container">
				<Menu />
				<Subtitle className="current-page-name">
					"{((page === '/' || page === 'home') && 'Dálcio Garcia') || page}"
				</Subtitle>
			</div>
		</Wrapper>
	);
}
