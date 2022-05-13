export const theme = {
	colors: {
		text: '#000',
		primary: '#3f3f3f',
		border: '#a5a7af',
		white: '#f4f9fc',
		menu: '#e1efd8',

		home: '#ddeaf6',
		homeLight: '#ddeaf6',

		about: '#fff2cc',
		aboutLight: '#fff2cc',

		articles: '#d5dbe5',
		articlesLight: '#d5dbe5',

		works: '#d8e2f3',
		worksLight: '#d8e2f3'
	},
	space: {
		sm: '5px',
		md: '10px',
		lg: '15px'
	},
	fontSizes: {
		xs: '.75rem',
		sm: '.875rem',
		tiny: '.875rem',
		base: '1rem',
		lg: '1.125rem',
		xl: '1.25rem',
		'2xl': '1.5rem',
		'3xl': '1.875rem',
		'4xl': '2.25rem',
		'5xl': '3rem',
		'6xl': '4rem',
		'7xl': '5rem'
	},
	fonts: {
		// untitled: 'Roboto, sans-serif',
		untitled: 'Bitter, serif',
		mono: 'Fira Code, monospace'
	},
	fontWeights: {
		hairline: 100,
		'extra-light': 100,
		thin: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		'extra-bold': 800,
		black: 900
	},
	lineHeights: {},
	letterSpacings: {
		tightest: '-.075em',
		tighter: '-.05em',
		tight: '-.025em',
		normal: '0',
		wide: '.025em',
		wider: '.05em',
		widest: '.1em'
	},
	sizes: {
		'w-0': '0.25rem',
		'w-1': '0.5rem',
		'w-2': '0.75rem',
		'w-3': '1rem',
		'w-4': '2rem',
		'w-400': '25rem',
		'w-500': '31.25rem',
		'w-max': '1000px',
		'h-0': '0.25rem',
		'h-1': '0.5rem',
		'h-2': '0.75rem',
		'h-3': '1rem',
		'h-4': '2rem',
		'h-max': '1440px'
	},
	borders: {
		'hand-drawn-1': `1px solid #a5a7af`,
		'hand-drawn-2': `2px solid #a5a7af`
	},
	borderWidths: {
		'border-0': '0px',
		'border-2': '2px',
		'border-4': '4px',
		'border-8': '8px',
		border: '1px'
	},
	radii: {
		'hand-drawn': '255px 15px 225px 15px/15px 225px 15px 255px',
		'round-none': '0px',
		'rround-sm': '0.125rem' /* 2px */,
		round: '0.25rem' /* 4px */,
		'round-md': '0.375rem' /* 6px */,
		'round-lg': '0.5rem' /* 8px */,
		'round-fill': '9999px'
	},
	shadows: {},
	zIndices: {
		'z-0': '0',
		'z-10': '10',
		'z-20': '20',
		'z-30': '30',
		'z-40': '40',
		'z-50': '50',
		'z-auto': 'auto'
	},
	transitions: {
		xSlow: '600ms',
		slow: '500ms',
		normal: '400ms',
		fast: '200ms',
		xFast: '100ms'
	},
	media: {
		bp1: '@media only screen and (min-width: 768px)'
	},
	utils: {
		marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
		marginY: (value: string) => ({ marginTop: value, marginBottom: value }),
		paddingX: (value: string) => ({ paddingLeft: value, paddingRight: value }),
		paddingY: (value: string) => ({ paddingTop: value, paddingBottom: value })
	}
};

export type Theme = typeof theme;

export type Colors = keyof Theme['colors'];
export type Space = keyof Theme['space'];
export type Sizes = keyof Theme['sizes'];

export default theme;
