import { RouteColorName } from '@theme/system/colors.types';

const routes: RouteColorName[] = ['home', 'about', 'articles', 'works'];

const getRouteName = (p: string): RouteColorName =>
	((p === '/' && 'home') || routes.includes(p as RouteColorName)
		? p
		: 'home') as RouteColorName;

export default getRouteName;
