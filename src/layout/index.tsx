import useRoute from '@hooks/useRoute';

import LayoutContainer from './Container';
import LayoutWrapper from './Wrapper';
import Header from './Header';
import HireMe from './HireMe';

const layoutHelpers = (
	<>
		<div className="border-axys border-x" />
		<div className="border-axys border-y" />
		<div className="diagonal-axys top-diagonal" />
		<div className="diagonal-axys bottom-diagonal" />
	</>
);

export default function Layout({ children }) {
	const currentRoute = useRoute();

	return (
		<LayoutWrapper page={currentRoute}>
			<LayoutContainer page={currentRoute}>
				{layoutHelpers}
				<Header page={currentRoute} />
				{children}
				<HireMe />
			</LayoutContainer>
		</LayoutWrapper>
	);
}
