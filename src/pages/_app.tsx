import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { theme } from '@styles';

import Layout from '@layout';
import GlobalStyles from '@styles/global';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<GlobalStyles />
		</ThemeProvider>
	);
}
