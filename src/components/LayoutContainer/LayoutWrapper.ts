import styled from 'styled-components';

import { InnerLayoutWrapperProps } from './types';

const LayoutWrapper = styled.div<InnerLayoutWrapperProps>`
	background: ${({ bg, theme }) => theme.colors[bg]};

	&:after {
		content: '';
		position: fixed;
		background: ${({ theme }) => theme.colors.white};
		z-index: 1;
		inset: 0;
	}

	${({ home, bg, theme: { colors, space } }) =>
		(home &&
			`
			margin: ${space.md};
			min-height: calc(100vh - 2 * ${space.md});
			
			&:after {
				top: calc(100vh - ${space.md});
				height: ${space.md};
			}
			`) ||
		`
			margin: ${space.sm};
			margin-top: calc(2 * ${space.sm});;
			min-height: calc(100vh - 1px - 3 * ${space.sm});
			position: relative;
			
			&::before {
				content: '';
				position: absolute;				
				border: 1px solid ${colors[bg]};
				z-index: -1;
				top: -${space.sm};
				right: ${space.sm};
				left: ${space.sm};
				height: ${space.sm};				
			}		
					
			&:after {
				top: calc(100vh - ${space.sm});
				height: ${space.sm};
			}

		`};
`;

export default LayoutWrapper;
