import { LayoutProps } from '@layout/types';
import { FC, useEffect, useState } from 'react';

import LayoutWrapper from './LayoutWrapper';

const LayoutContainer: FC<LayoutProps> = ({ home, bg, children }) => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			const scrollY = window.scrollY;

			if (scrollY > 10 && !scrolled) {
				setScrolled(true);
			} else if (scrollY <= 10 && scrolled) {
				setScrolled(false);
			}
		};
		document.addEventListener('scroll', onScroll);
	}, [scrolled]);

	return (
		<LayoutWrapper
			home={home}
			className={scrolled ? 'scrolled' : 'not-scrolled'}
			bg={bg}
		>
			{children}
		</LayoutWrapper>
	);
};

export default LayoutContainer;
