import { Text, Title } from '@components/common';

import { AboutBodyContainer } from './styles';

import Skills, { SkillsContainer } from './SKills';

export default function AboutBody() {
	return (
		<AboutBodyContainer>
			<div className="my-journey">
				<Text>
					I'm a Computer Engineering student at{' '}
					<abbr title="Instituto Superior Politécnico de Tecnologias e Ciências">
						ISPTEC
					</abbr>
					, Luanda Angola.
				</Text>
				<Text>
					I used to focus on <strong>front end</strong> of <strong>web</strong>
					and <strong>mobile</strong> applications, because I love the way that
					each line of code can be converted into a pixel.
				</Text>
				<Text>
					Someone once said: <i>"if you won't work do what you like"</i> , and
					this principle makes me happy every time that I start coding, because
					better then code jus <strong>food*</strong>.
				</Text>
			</div>
			<Title type="small" className="section-head">
				Skills and Experiences
			</Title>
			<Skills />
			<Title type="small" className="section-head">
				Languages
			</Title>
			<SkillsContainer>
				<div className="item fill">Native Portuguese</div>
				<div className="item">Conversational English</div>
			</SkillsContainer>
			<Title type="small" className="section-head">
				Hobbies
			</Title>
			<div className="section-body">
				<Text>
					Trying to smile everyday. I like cook & ate, run & skip to jump,
					coding, watch <i>(series, anime's, movies, ...)</i>.
				</Text>
			</div>
		</AboutBodyContainer>
	);
}
