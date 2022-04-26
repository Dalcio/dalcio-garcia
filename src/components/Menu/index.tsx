import { useState } from 'react';

import { MenuContainer } from './container';
import { MenuProps } from './types';

import MenuBtn from './btn';
import MenuContent from './content';

const Menu = ({ home, current }: MenuProps) => {
	const [open, setOpen] = useState(true);

	const handleOpenMenu = () => {
		setOpen((prev) => !prev);
	};

	return (
		<MenuContainer home={home}>
			<MenuBtn handleOpen={handleOpenMenu} open={open} />
			{open && (
				<MenuContent>
					<h1>The content of menu just goes here</h1>
				</MenuContent>
			)}
		</MenuContainer>
	);
};

export default Menu;
