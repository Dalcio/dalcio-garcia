import { LayoutContainer, Menu } from '@components';
import { FC } from 'react';

import { LayoutProps } from './types';

const Layout: FC<LayoutProps> = ({ home, bg, children }) => {
	return (
		<LayoutContainer home={home} bg={bg}>
			<Menu home={home} current={bg} />
			{children}
		</LayoutContainer>
	);
};

export default Layout;
