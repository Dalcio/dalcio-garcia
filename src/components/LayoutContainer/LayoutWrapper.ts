import styled from 'styled-components';

import { InnerLayoutWrapperProps } from './types';

const LayoutWrapper = styled.div<InnerLayoutWrapperProps>`
	overflow-y: auto;

	.layout-inner-wrapper {
		position: relative;
		min-height: 100%;
		background: ${({ bg, theme }) => theme.colors[bg]};
	}

	${({ home, bg, theme: { colors, space } }) =>
		(home &&
			`
      height: calc(100vh - ${space.md});
      padding: ${space.md} ${space.md} 0;
		`) ||
		`
      height: calc(100vh - 3 * ${space.sm});
      margin-top:  calc(2 * ${space.sm});
      // padding: 0 ${space.sm};
      // padding-left: calc( ${space.sm});

      .layout-inner-wrapper {
        margin: 0 ${space.sm};
        // margin-right: ${space.sm};
      }

			&::before {
				content: '';
				background: ${colors[bg]};
				position: absolute;
				z-index: -1;

				inset  ${space.sm};
				left: calc(2 * ${space.sm});
				right calc(3 * ${space.sm});
			}

			&::after {
				content: '';
				position: absolute;
				z-index: 1;
        top: calc( 2 * ${space.sm});
				left: ${space.sm};
				right calc( ${space.sm});
        border-top: 1px solid ${colors.white};
			}
		`};
`;

export default LayoutWrapper;
