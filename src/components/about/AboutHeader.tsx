import { Title } from '@components/common';
import styled, { css } from 'styled-components';

const AboutHeaderContainer = styled.header(
	({ theme: { space, sizes } }) => css`
		display: grid;
		align-content: center;
		max-width: ${sizes['w-400']};
		min-height: 100vh;
		padding: calc(8 * ${space.md}) calc(3 * ${space.md});
		row-gap: calc(2 * ${space.md});
	`
);

export default function AboutHeader() {
	return (
		<AboutHeaderContainer>
			<Title type="big" underline>
				Who's Dálcio Garcia?
			</Title>
			Dálcio is a creative front-end mobile and web developer. I’m a creative
			front-end mobile and web developer.
		</AboutHeaderContainer>
	);
}
