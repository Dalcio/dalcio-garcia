import { LayoutContainer, Menu } from '@components';
import { getRouteName } from '@utilities';
import { useRouter } from 'next/dist/client/router';

const Layout = ({ children }) => {
	const { pathname } = useRouter();
	const home = pathname === '/';
	const current = getRouteName(pathname.toLowerCase().substr(1));

	return (
		<LayoutContainer home={home} current={current}>
			<Menu home={home} current={current} />
			{children}
		</LayoutContainer>
	);
};

export default Layout;
