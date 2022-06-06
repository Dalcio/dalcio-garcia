import { WorksBody, WorksHeader } from '@components/works';
import { GetStaticProps } from 'next';

import Head from 'next/head';

export default function WorksPage() {
	return (
		<>
			<Head>
				<title>My Works</title>
			</Head>
			<section className="page-cover">
				<WorksHeader />
			</section>
			<main>
				<WorksBody />
			</main>
		</>
	);
}

export const getStaticProps: GetStaticProps = () => {
	const projects = [{ a: 'as' }];

	console.log('just runs************************');

	return {
		props: {
			projects
		}
	};
};
