import useRoute from '@hooks/useRoute';

import LayoutContainer from './Container';
import CustomCursor from './CustomCursor';
import Header from './Header';
import HireMe from './HireMe';

export default function Layout({ children }) {
	const currentRoute = useRoute();

	return (
		<LayoutContainer>
			<Header page={currentRoute} />
			{children}
			<HireMe />
			<CustomCursor />
		</LayoutContainer>
	);
}
