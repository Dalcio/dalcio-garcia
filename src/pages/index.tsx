import { HomeBody, HomeHeader } from '@components/home';

import Head from 'next/head';

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Dálcio Garcia - Frontend Developer</title>
			</Head>
			<section className="page-cover">
				<HomeHeader />
			</section>
			<main>
				<HomeBody />
			</main>
		</>
	);
}
