import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MenuContentContainer, Header } from './styles';

import MenuNav from './MenuNav';

export default function MenuContent({ children }) {
	return (
		<MenuContentContainer>
			<Header>
				<a href="https://linkedin.com/in/dalcio-garcia/" target="_bllank">
					<BsLinkedin />
				</a>
				<a href="https://github.com/dalcio" target="_bllank">
					<BsGithub />
				</a>
			</Header>
			<MenuNav>{children}</MenuNav>
		</MenuContentContainer>
	);
}
