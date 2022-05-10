import { Subtitle } from '@components/common';
import ROUTES, { Routes } from '@constants/routes';

import styled, { css } from 'styled-components';

import Menu from './Menu';

const Wrapper = styled.div<{ page: Routes }>(
	({ page, theme: { colors, media, space, sizes, zIndices } }) => css`
		position: fixed;
		z-index: ${zIndices['z-20']};
		left: calc(2 * ${space.md});
		right: calc(2 * ${space.md});

		padding: ${space.lg} ${space.md} ${space.sm} ${space.md};

		background: ${colors[ROUTES[page] ?? 'home']};

		.header-container {
			width: min(${sizes['w-max']}, 100%);
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
		}

		.current-page-name {
			margin-right: calc(2 * ${space.md});
			padding-top: calc(2 * ${space.md});
		}

		${media.bp1} {
			padding: ${space.lg} ${space.lg} inherit ${space.md};
			left: calc(calc(100vw - min(${sizes['w-max']}, 100%)) / 2);
			right: calc(calc(100vw - min(${sizes['w-max']}, 100%)) / 2);
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
