import styled, { css } from 'styled-components';

export const HomeBodyContainer = styled.main(
	({ theme: { space } }) => css`
		padding: calc(4 * ${space.md});
	`
);
