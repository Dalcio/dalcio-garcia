import Head from 'next/head';

import { HomeBody, HomeHeader } from '@components/home';

const Home = () => {
	return (
		<>
			<Head>
				<title>Dálcio Garcia - Frontend Developer</title>
			</Head>
			<HomeHeader />
			<HomeBody />
		</>
	);
};

export default Home;
