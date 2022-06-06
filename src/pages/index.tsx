import { HomeBody, HomeHeader } from '@components/home';
import { GetStaticProps } from 'next';

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

export const getStaticProps: GetStaticProps = () => {
	const projects = [{ a: 'as' }];
	const articles = [{ a: ' as' }];

	console.log('just runs************************');

	return {
		props: {
			data: {
				projects,
				articles
			}
		}
	};
};
