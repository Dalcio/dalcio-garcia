import { Title, Text, HeaderContainer } from '@components/common';

export default function ArticlesHeader() {
	return (
		<HeaderContainer>
			<Title type="big" underline underlineColor="primary">
				My articles
			</Title>
			<Text>
				The best way to learn something is to try to teach something, no matter
				how small or big it may seem. That's why I decided to start writing and
				sharing some content that I find interesting with the community.
			</Text>
		</HeaderContainer>
	);
}
