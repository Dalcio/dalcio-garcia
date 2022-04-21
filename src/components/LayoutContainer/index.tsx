import { LayoutProps } from '@layout/types';
import { FC, useRef } from 'react';
import { InnertLayoutWrapper, OuterLayoutWrapper } from './wrappers';

const LayoutContainer: FC<LayoutProps> = ({ home, bg, children }) => {
	const innerWrapperRef = useRef(null);

	return (
		<OuterLayoutWrapper home={home} bg={bg}>
			<InnertLayoutWrapper ref={innerWrapperRef} bg={bg}>
				{children}
			</InnertLayoutWrapper>
		</OuterLayoutWrapper>
	);
};

export default LayoutContainer;
