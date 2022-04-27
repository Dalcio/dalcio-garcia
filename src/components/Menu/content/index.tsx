import { MenuContentContainer } from './styles';
import { MenuContentProps, MenuItemProps } from './types';

import Link from 'next/link';
import styled from 'styled-components';

import { RouteColorName } from '@theme/system/colors.types';

const ItemLink = styled.a<{ color: RouteColorName }>`
	cursor: pointer;
	font-size: 40px;

	&:hover {
		display: inline-block;
		font-size: 42px;
		border-botom: 2px solid ${({ color, theme }) => theme.colors[color]};
	}

	&.is-active {
		& > span:first-of-type {
			display: inline-block;
			background: ${({ color, theme }) => theme.colors.primary};
			color: ${({ color, theme }) => theme.colors[color]};
		}
	}
`;

export const MenuItem = ({ name, current }: MenuItemProps) => (
	<li>
		<Link href={`/${name === 'home' ? '' : name}`}>
			<ItemLink
				color={current}
				className={current === name ? 'is-active' : undefined}
			>
				<span>{name.substr(0, 2)}</span>
				<span>{name.substr(2)}</span>
			</ItemLink>
		</Link>
	</li>
);

export const MenuNav = styled.ul`
	margin-top: ${({ theme }) => `calc(2 * ${theme.space.md})`};
	list-style: none;
	displya: grid;
	row-gap: ${({ theme }) => theme.space.sm};
`;

const MenuContent = ({ current }: MenuContentProps) => {
	return (
		<MenuContentContainer>
			<MenuNav>
				<MenuItem name="home" current={current} />
				<MenuItem name="about" current={current} />
				<MenuItem name="works" current={current} />
				<MenuItem name="articles" current={current} />
			</MenuNav>
			<h1>The content of menu just goes here</h1>
		</MenuContentContainer>
	);
};

export default MenuContent;
