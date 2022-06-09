enum ROUTES {
	'/' = 'home',
	about = 'about',
	articles = 'articles',
	home = 'home',
	works = 'works'
}

export type Routes = keyof typeof ROUTES;
export type RoutesKey = keyof ROUTES;

export default ROUTES;
