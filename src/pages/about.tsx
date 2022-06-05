import { AboutBody, AboutHeader } from '@components/about';

import Head from 'next/head';

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>Knowing Dálcio Garcia</title>
			</Head>
			<section className="page-cover">
				<AboutHeader />
			</section>
			<main>
				<AboutBody />
			</main>
		</>
	);
}
