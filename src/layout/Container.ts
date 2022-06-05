import styled, { css } from 'styled-components';

const LayoutContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;

		& > .page-cover,
		& > main {
			padding: calc(8 * ${theme.space.md}) calc(3 * ${theme.space.md});
			display: flex;
			justify-content: center;

			& > div {
				width: 100%;
				max-width: ${theme.sizes['w-max']};
			}
		}

		& > .page-cover {
			position: fixed;
			width: 100%;

			min-height: 100vh;
			background: ${theme.colors.secondaryBackground};

			& > div {
				overflow-y: auto !important;
				height: calc(100vh - 16 * ${theme.space.md});
			}
		}

		& > main {
			position: relative;
			z-index: 1;
			margin-top: 100vh;
			background: ${theme.colors.background};
		}
	`}
`;

export default LayoutContainer;
