import ArticlesBody from '@components/articles';
import Head from 'next/head';
import Layout from '@layout';
import React from 'react';

const Articles: React.FC = () => {
	return (
		<Layout bg="articles">
			<Head>
				<title>Dálcio Garcia</title>
			</Head>
			<ArticlesBody />
		</Layout>
	);
};

export default Articles;
