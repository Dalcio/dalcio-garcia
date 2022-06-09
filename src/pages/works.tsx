import { WorksBody, WorksHeader } from '@components/works';

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
