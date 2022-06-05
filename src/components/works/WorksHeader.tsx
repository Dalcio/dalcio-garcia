import { Title, Text, HeaderContainer } from '@components/common';

export default function WorksHeader() {
	return (
		<HeaderContainer>
			<Title type="big" underline>
				My works
			</Title>
			<Text>
				I work with amazing guys to build and deliver amazing systems, making
				the world a little bigger and from <strong>Mochi Noir</strong>,{' '}
				<strong>BatDev</strong> to incubated startups like{' '}
				<strong>Abasteca</strong> and <strong>OKUSSAKULA</strong>, I have and am
				trying to deliver accessible services, trying to reach as many people as
				possible.
			</Text>
		</HeaderContainer>
	);
}
