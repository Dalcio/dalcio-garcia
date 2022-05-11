import { Title, Text } from '@components/common';
import styled, { css } from 'styled-components';

const ArticlesHeaderContainer = styled.header(
	({ theme: { space, sizes } }) => css`
		display: grid;
		align-content: center;
		max-width: ${sizes['w-500']};
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
				I Start writing some articles because, If you want learm better teach to
				someone the subject that your studying.
			</Text>
		</ArticlesHeaderContainer>
	);
}
