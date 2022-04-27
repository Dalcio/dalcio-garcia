import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@theme/global';
import Layout from '@layout';
import theme from '@theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<ThemeProvider theme={theme}>
		<Layout>
			<Component {...pageProps} />
		</Layout>
		<GlobalStyle />
	</ThemeProvider>
);

export default MyApp;
