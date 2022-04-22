import { LayoutProps } from '@layout/types';
import { FC, useRef } from 'react';

import LayoutWrapper from './LayoutWrapper';

const LayoutContainer: FC<LayoutProps> = ({ home, bg, children }) => {
	const innerWrapperRef = useRef(null);

	return (
		<LayoutWrapper home={home} ref={innerWrapperRef} bg={bg}>
			{children}
		</LayoutWrapper>
	);
};

export default LayoutContainer;
