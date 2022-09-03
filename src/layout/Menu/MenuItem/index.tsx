import ROUTES, { Routes } from '@constants/routes';
import styled, { css } from 'styled-components';

import useRoute from '@hooks/useRoute';
import Link from 'next/link';

import ItemLink from './ItemLink';

type MenuItemProps = {
	name: Routes;
	onSelect: () => void;
};

const Li = styled.li(
	({ theme: { colors, space, radii } }) => css`
		margin: 6px 6px 6px 0;

		&.li-is-active {
			position: relative;

			& > .back-a-container {
				position: absolute;
				border-radius: ${radii.sm};
				top: calc(2 * ${space.xs});
				left: calc(2 * ${space.xs});
				width: 100%;
				height: 100%;
				background: ${colors.background};
			}
		}
	`
);

export default function MenuItem({ name, onSelect }: MenuItemProps) {
	const currentRoute = useRoute();

	const label = ROUTES[name];

	return (
		<Li
			onClick={onSelect}
			className={currentRoute === name ? 'li-is-active' : undefined}
		>
			<Link href={name === 'home' ? '/' : name}>
				<ItemLink className={currentRoute === name ? 'is-active' : undefined}>
					<span>{label.substring(0, 2)}</span>
					<span>{label.substring(2)}</span>
				</ItemLink>
			</Link>
			<div className="back-a-container" />
		</Li>
	);
}
