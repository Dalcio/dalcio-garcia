import { Title, Text } from '@components/common';
import styled, { css } from 'styled-components';

const WorksHeaderContainer = styled.header(
	({ theme: { space, sizes } }) => css`
		display: grid;
		align-content: center;
		max-width: ${sizes['w-500']};
		row-gap: calc(2 * ${space.md});
	`
);

export default function WorksHeader() {
	return (
		<WorksHeaderContainer>
			<Title type="big" underline>
				My works
			</Title>
			<Text>Give a look at what I built</Text>
		</WorksHeaderContainer>
	);
}
