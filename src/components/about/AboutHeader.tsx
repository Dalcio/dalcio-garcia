import { Button, Title, Text, HeaderContainer } from '@components/common';

export default function AboutHeader() {
	return (
		<HeaderContainer>
			<Title type="big" underline underlineColor="primary">
				Who's Dálcio Garcia?
			</Title>
			<Text>
				Dálcio is a creative junior Software Engineer, with{' '}
				<strong>1+ years</strong> of experiences.
			</Text>
			<Button>
				<a href="/dalcio.pdf" download="dalcio">
					See My Resume
				</a>
			</Button>
		</HeaderContainer>
	);
}
