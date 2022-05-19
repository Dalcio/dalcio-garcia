import { Title, Text } from '@components/common';
import styled, { css } from 'styled-components';

const ArticlesHeaderContainer = styled.header(
	({ theme: { space, sizes } }) => css`
		display: grid;
		align-content: center;
		max-width: ${sizes['w-700']};
		row-gap: calc(2 * ${space.md});
	`
);

export default function ArticlesHeader() {
	return (
		<ArticlesHeaderContainer>
			<Title type="big" underline>
				My articles
			</Title>
			<Text>
				The best way to learn something is to try to teach something, no matter
				how small or big it may seem. That's why I decided to start writing and
				sharing some content that I find interesting with the community.
			</Text>
		</ArticlesHeaderContainer>
	);
}
