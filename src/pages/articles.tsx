import { ArticlesBody, ArticlesHeader } from '@components/articles';

import Head from 'next/head';

export default function ArticlesPage() {
	return (
		<>
			<Head>
				<title>My Articles</title>
			</Head>
			<section className="page-cover">
				<ArticlesHeader />
			</section>
			<main>
				<ArticlesBody />
			</main>
		</>
	);
}
