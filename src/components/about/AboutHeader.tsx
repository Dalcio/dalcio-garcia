import { Button, Title, Text } from '@components/common';
import styled, { css } from 'styled-components';

const AboutHeaderContainer = styled.header(
	({ theme: { space, sizes } }) => css`
		display: grid;
		align-content: center;
		max-width: ${sizes['w-500']};
		row-gap: calc(2 * ${space.md});
	`
);

export default function AboutHeader() {
	return (
		<AboutHeaderContainer>
			<Title type="big" underline>
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
		</AboutHeaderContainer>
	);
}
