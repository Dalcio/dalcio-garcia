import { LayoutContainer } from '@components';
import { FC } from 'react';

import { LayoutProps } from './types';

const Layout: FC<LayoutProps> = ({ home, bg, children }) => {
	return (
		<LayoutContainer home={home} bg={bg}>
			{children}
		</LayoutContainer>
	);
};

export default Layout;
