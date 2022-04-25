import { LayoutProps } from '@layout/types';
import { FC, ReactNode, UIEvent, useEffect, useRef } from 'react';

import LayoutWrapper from './LayoutWrapper';

const LayoutContainer: FC<LayoutProps> = ({ home, bg, children }) => {
	const innerWrapperRef = useRef<HTMLDivElement>(null);

	const onScroll = (e: UIEvent<ReactNode>) => {
		console.log('Scroll');
		if (innerWrapperRef.current) {
			const clientY = innerWrapperRef.current.clientTop;
			console.log(clientY);
		}
	};

	return (
		<LayoutWrapper
			onScroll={onScroll}
			home={home}
			ref={innerWrapperRef}
			bg={bg}
		>
			{children}
		</LayoutWrapper>
	);
};

export default LayoutContainer;
