import { Button, Title, Text, HeaderContainer } from '@components/common';

export default function AboutHeader() {
	return (
		<HeaderContainer>
			<Title type="big" underline underlineColor="primary">
				Who's Dálcio Garcia?
			</Title>
			<Text>
				Dálcio is a creative front-end <strong>mobile</strong> and{' '}
				<strong>web</strong> developer.
			</Text>
			<Button bg="about">
				<a href="/dalcio.pdf" download="dalcio">
					See My Resume
				</a>
			</Button>
		</HeaderContainer>
	);
}
