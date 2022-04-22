import styled from 'styled-components';

import { InnerLayoutWrapperProps } from './types';

const LayoutWrapper = styled.div<InnerLayoutWrapperProps>`
	background: ${({ bg, theme }) => theme.colors[bg]};

	${({ home, bg, theme: { colors, space } }) =>
		(home &&
			`
			height: calc(100vh - 2 * ${space.md});
			margin: ${space.md};
		`) ||
		`	
			height: calc(100vh - 3 * ${space.sm});
			margin: calc(2 * ${space.sm}) calc(2 * ${space.sm}) ${space.sm}	${space.sm};
			border-top: 1px solid ${colors.white};
			border-right: 1px solid ${colors.white};

			&::before {
				content: '';
				background: ${colors[bg]};
				position: absolute;
				inset: 0;
				z-index: -1;
				top: -${space.sm};
				right: -${space.sm};			
			}
		`};

	position: relative;
`;

export default LayoutWrapper;
