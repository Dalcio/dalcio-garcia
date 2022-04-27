import { useState } from 'react';

import { MenuContainer } from './container';
import { MenuProps } from './types';

import MenuBtn from './btn';
import MenuContent from './content';
import PaintOpenner from './paint';

const TIMEOUT = 2000; // 2s

const Menu = ({ home, current }: MenuProps) => {
	const [open, setOpen] = useState(false);
	const [shouldShow, setShouldShow] = useState(false);

	const handleOpenMenu = () => {
		setShouldShow((prev) => !prev);

		if (open) setOpen(false);

		setTimeout(() => {
			setShouldShow(false);
			setOpen((prev) => !prev);
		}, TIMEOUT);
	};

	return (
		<MenuContainer home={home}>
			{(shouldShow && <PaintOpenner />) || (
				<MenuBtn
					handleOpen={handleOpenMenu}
					open={open}
					shouldShow={shouldShow}
				/>
			)}
			{open && <MenuContent />}
		</MenuContainer>
	);
};

export default Menu;
