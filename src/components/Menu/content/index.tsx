import { MenuContentContainer } from './styles';
import { MenuContentProps } from './types';

const MenuContent = ({ current }: MenuContentProps) => {
	return (
		<MenuContentContainer>
			<h1>The content of menu just goes here</h1>
		</MenuContentContainer>
	);
};

export default MenuContent;
