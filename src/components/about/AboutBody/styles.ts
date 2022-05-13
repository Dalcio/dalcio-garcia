import styled, { css } from 'styled-components';

export const AboutBodyContainer = styled.main(
	({ theme: t }) => css`
		& > .my-jouney {
			max-width: ${t.sizes['w-500']};
		}

		& > .section-head {
			margin-top: calc(4 * ${t.space.lg});
		}

		& > .section-body {
			max-width: ${t.sizes['w-500']};
			margin-top: ${t.space.lg};
			margin-bottom: calc(2 * ${t.space.lg});
		}

		& > .skills-container {
		}
	`
);
