import React from 'react';
import Head from 'next/head';
import Layout from '@layout';

const About: React.FC = () => {
	return (
		<Layout bg="about">
			<Head>
				<title>Knowing Dálcio Garcia</title>
			</Head>
			<h1>About Page Space</h1>
		</Layout>
	);
};

export default About;
