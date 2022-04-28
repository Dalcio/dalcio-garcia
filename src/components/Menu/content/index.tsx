import { MenuContentContainer, MenuNav } from './styles';
import { MenuContentProps } from './types';

import MenuItem from './MenuItem';

const MenuContent = ({ current }: MenuContentProps) => {
	return (
		<MenuContentContainer>
			<MenuNav>
				<MenuItem name="home" current={current} />
				<MenuItem name="about" current={current} />
				<MenuItem name="works" current={current} />
				<MenuItem name="articles" current={current} />
			</MenuNav>
		</MenuContentContainer>
	);
};

export default MenuContent;
