import Articles from '@components/articles';
import Head from 'next/head';

export default function ArticlesPage() {
	return (
		<>
			<Head>
				<title>My Articles</title>
			</Head>
			<Articles />
		</>
	);
}
