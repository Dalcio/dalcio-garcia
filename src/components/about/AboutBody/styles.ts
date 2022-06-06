import styled, { css } from 'styled-components';

export const AboutBodyContainer = styled.div(
	({ theme: t }) => css`
		& > .my-journey,
		& > .section-body {
			max-width: ${t.sizes['w-max']};
		}

		& > .section-head {
			margin-top: calc(4 * ${t.space.lg});
		}

		& > .section-body {
			margin-top: ${t.space.lg};
			margin-bottom: calc(2 * ${t.space.lg});
		}

		& > .skills-container {
		}
	`
);
