import ROUTES, { Routes } from '@constants/routes';

import useRoute from '@hooks/useRoute';
import Link from 'next/link';

import ItemLink from './ItemLink';

type MenuItemProps = {
	name: Routes;
	onSelect: () => void;
};

export default function MenuItem({ name, onSelect }: MenuItemProps) {
	const currentRoute = useRoute();

	const label = ROUTES[name];

	return (
		<li onClick={onSelect}>
			<Link href={name === 'home' ? '/' : name}>
				<ItemLink
					color={currentRoute}
					className={currentRoute === name ? 'is-active' : undefined}
				>
					<span>{label.substr(0, 2)}</span>
					<span>{label.substr(2)}</span>
				</ItemLink>
			</Link>
		</li>
	);
}
