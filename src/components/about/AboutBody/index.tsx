import { Text, Title } from '@components/common';

import { AboutBodyContainer } from './styles';

import Skills from './SKills';

const SectionBody = ({ content }: { content: string }) => (
	<div className="section-body">
		<Text>{content}</Text>
	</div>
);

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
					Over time, the curious gene in mi could not stand still when the
					subject involved software development, always wanting to discover the
					role behind the scenes. With that, I developed a huge passion for the
					software building process, because the process of bringing something
					something to life, from paper to digital proved to be very
					captivating.
				</Text>
				<Text>Currently, I act as an application front-end.</Text>
			</div>
			<Title type="small" className="section-head">
				Skills and Experiences
			</Title>
			<SectionBody content="Currently, for construction of my projects I have my knowledge stack based on javascript frameworks, leaving open the engagement of others for when necessary." />
			<Skills />
			<Title type="small" className="section-head">
				Hobbies
			</Title>
			<SectionBody content="Trying to smile everyday. I like to do some exercise most days, for health especially to free my mind and improve my creativity, I also love to eat and cook and I like to meditate to improve my self-control. And best of all, watch (films, series, documentaries, anime and so on)" />
		</AboutBodyContainer>
	);
}
