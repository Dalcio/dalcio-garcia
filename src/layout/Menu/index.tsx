import { useState } from 'react';

import MenuContent from './MenuContent';
import MenuItem from './MenuItem';
import MenuTrigger from './MenuTrigger';

export default function Menu() {
	const [open, setIsOpen] = useState<boolean>(false);

	const handleIsOpen = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div>
			<MenuTrigger open={open} onCLick={handleIsOpen} />
			{open && (
				<MenuContent>
					<MenuItem name="home" onSelect={handleIsOpen} />
					<MenuItem name="about" onSelect={handleIsOpen} />
					<MenuItem name="works" onSelect={handleIsOpen} />
					<MenuItem name="articles" onSelect={handleIsOpen} />
				</MenuContent>
			)}
		</div>
	);
}
