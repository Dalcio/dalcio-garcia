import { MenuContentContainer } from './styles';
import { MenuContentProps, MenuItemProps } from './types';

import Link from 'next/link';
import styled from 'styled-components';

import { Colors } from '@theme/system/colors.types';

const ItemLink = styled.a<{ color: Colors }>`
	cursor: pointer;
	font-size: 40px;

	& > span {
		color: ${({ color, theme }) => theme.colors[color]};
	}

	& > span:first-of-type {
		display: inline-block;
		background: ${({ color, theme }) => theme.colors[color]};
		color: ${({ color, theme }) => theme.colors.white};
	}
`;

export const MenuItem = ({ name, current }: MenuItemProps) => (
	<li>
		<Link href={`/${name === 'home' ? '' : name}`}>
			<ItemLink color={name === current ? current : 'text'}>
				<span>{name.substr(0, 2)}</span>
				<span>{name.substr(2)}</span>
				{current}
			</ItemLink>
		</Link>
	</li>
);

export const MenuNav = styled.ul`
	margin-top: ${({ theme }) => `calc(2 * ${theme.space.md})`};
	list-style: none;
`;

const MenuContent = ({ current }: MenuContentProps) => {
	return (
		<MenuContentContainer>
			<MenuNav>
				<MenuItem name="home" />
				<MenuItem name="about" />
			</MenuNav>
			<h1>The content of menu just goes here</h1>
		</MenuContentContainer>
	);
};

export default MenuContent;
