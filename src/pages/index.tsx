import Head from 'next/head';

import { HomeBody, HomeHeader } from '@components/home';

export default function Home() {
	return (
		<>
			<Head>
				<title>Dálcio Garcia - Frontend Developer</title>
			</Head>
			<HomeHeader />
			<HomeBody />
		</>
	);
}
