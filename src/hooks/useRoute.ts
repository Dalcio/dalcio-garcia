import ROUTES, { Routes, RoutesKey } from '@constants/routes';

import { useRouter } from 'next/router';

const getRouteName = (p: string): Routes =>
	(ROUTES[p as RoutesKey] ?? ROUTES.home) as Routes;

const useRoute = () => {
	const { pathname } = useRouter();
	const route = getRouteName(pathname.toLowerCase().substr(1));

	return route as Routes;
};

export default useRoute;
