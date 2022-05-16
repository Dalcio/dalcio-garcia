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
			<div className="my-jouney">
				<Text>
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout. The point of
					using Lorem Ipsum is that it has a more-or-less normal distribution of
					letters, as opposed to using 'Content here, content here', making it
					look like readable English.
				</Text>
				<Text>
					Many desktop publishing packages and web page editors now use Lorem
					Ipsum as their default model text, and a search for 'lorem ipsum' will
					uncover many web sites still in their infancy. Various versions have
					evolved over the years, sometimes by accident, sometimes on purpose
					(injected humour and the like).
				</Text>
			</div>
			<Title type="small" className="section-head">
				Skills and Experiences
			</Title>
			<SectionBody content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
			<Skills />
			<Title type="small" className="section-head">
				Hobbies
			</Title>
			<SectionBody content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
		</AboutBodyContainer>
	);
}
