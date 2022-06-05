import { Subtitle } from '@components/common';
import { Routes } from '@constants/routes';
import { theme } from '@styles';
import styled, { css } from 'styled-components';

import Menu from './Menu';

const Wrapper = styled.div(
	({ theme: { colors, zIndices } }) => css`
		position: fixed;
		z-index: ${zIndices['z-20']};
		width: 100%;

		background: ${colors.secondaryBackground};

		display: flex;
		justify-content: center;

		& > .header-container {
			width: 100%;
			max-width: ${theme.sizes['w-max']};
			padding: calc(3 * ${theme.space.md}) 0;

			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	`
);

export default function Header({ page }: { page: Routes }) {
	return (
		<Wrapper>
			<div className="header-container">
				<Menu />
				<Subtitle className="current-page-name">
					"{((page === '/' || page === 'home') && 'Dálcio Garcia') || page}"
				</Subtitle>
			</div>
		</Wrapper>
	);
}
