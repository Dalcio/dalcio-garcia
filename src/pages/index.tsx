import React from 'react';
import Head from 'next/head';
import Layout from '@layout';

import { HomeBody, HomeHeader } from '@components/home';

const Home: React.FC = () => {
	return (
		<Layout home bg="home">
			<Head>
				<title>Dálcio Garcia - Frontend Developer</title>
			</Head>
			<HomeHeader />
			<HomeBody />
		</Layout>
	);
};

export default Home;
