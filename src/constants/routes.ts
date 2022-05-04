enum ROUTES {
	about = 'about',
	community = 'community',
	home = 'home',
	'/' = 'home',
	work = 'work'
}

export type Routes = keyof typeof ROUTES;
export type RoutesKey = keyof ROUTES;

export default ROUTES;
