type RoutesCorols = {
	home: string;
	about: string;
	works: string;
	articles: string;
};

export type RouteColorName = keyof RoutesCorols;

export interface Colors extends RoutesCorols {
	text: string;
	primary: string;
	white: string;
	menu: string;
}
