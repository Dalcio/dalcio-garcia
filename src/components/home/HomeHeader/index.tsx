import { Subtitle, Title } from '@components/common';
import { HomeHeaderContainer } from './styles';

export default function HomeHeader() {
	return (
		<HomeHeaderContainer>
			<div className="avatar">
				<img id="avatar" src="/dalcio.svg" alt="Dálcio Garcia" />
				<div className="bg" />
			</div>
			<div className="greetings">
				<Title>Whatsapp bro! I'm</Title>
				<Title type="big">Dálcio Garcia.</Title>
			</div>
			<Subtitle className="self-intro">
				I'm a <i>Software Engineer</i> passionate about creating the front end
				of <strong>web</strong> and <strong>mobile</strong> apps.
			</Subtitle>
		</HomeHeaderContainer>
	);
}
