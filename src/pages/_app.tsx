import { AppProps } from 'next/app';
import { globalConfigCss } from '@styles';

import Layout from '@layout';

export default function MyApp({ Component, pageProps }: AppProps) {
	globalConfigCss();

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
