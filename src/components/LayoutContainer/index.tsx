import { LayoutProps } from '@layout/types';
import { FC, useEffect, useState } from 'react';

import LayoutWrapper from './LayoutWrapper';

const LayoutContainer: FC<LayoutProps> = ({ home, bg, children }) => {
	const [scrolled, setScrolled] = useState<'not-scrolled' | 'scrolled'>(
		'not-scrolled'
	);

	useEffect(() => {
		const onScroll = () => {
			const scrollY = window.scrollY;

			if (scrollY > 10 && scrolled === 'not-scrolled') {
				setScrolled('scrolled');
			} else if (scrollY <= 10 && scrolled === 'scrolled') {
				setScrolled('not-scrolled');
			}
		};
		document.addEventListener('scroll', onScroll);
	}, [scrolled]);

	return (
		<LayoutWrapper home={home} className={scrolled} bg={bg}>
			{children}
		</LayoutWrapper>
	);
};

export default LayoutContainer;
