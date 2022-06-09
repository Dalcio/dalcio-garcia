import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MenuContentContainer, Header } from './styles';

import MenuNav from './MenuNav';

export default function MenuContent({ children }) {
	return (
		<MenuContentContainer>
			<div className="back-container" />
			<div className="container">
				<Header>
					<a href="https://linkedin.com/in/dalcio-garcia/" target="_bllank">
						<BsLinkedin /> Dalcio
					</a>
					<a href="https://github.com/dalcio" target="_bllank">
						<BsGithub /> @dalcio
					</a>
				</Header>
				<MenuNav>{children}</MenuNav>
			</div>
		</MenuContentContainer>
	);
}
