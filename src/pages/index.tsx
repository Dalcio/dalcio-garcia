import { HomeBody, HomeHeader } from '@components/home';
import { HomeBodyProps } from '@components/home/HomeBody';
import { GetStaticProps } from 'next';

import articlesData from '@data/articles.json';
import awesomeThings from '@data/awesome-things.json';
import projectsData from '@data/projects.json';

import Head from 'next/head';

export default function HomePage({ data }: { data: HomeBodyProps }) {
	return (
		<>
			<Head>
				<title>Dálcio Garcia - Frontend Developer</title>
			</Head>
			<section className="page-cover">
				<HomeHeader />
			</section>
			<main>
				{data && <HomeBody projects={data.projects} articles={data.articles} />}
			</main>
		</>
	);
}

export const getStaticProps: GetStaticProps = () => {
	const projects = [];
	const articles = [];

	if (awesomeThings) {
		awesomeThings.articles.forEach((_id) => {
			if (articlesData) {
				const idx = articlesData.findIndex(({ id }) => id === _id);
				if (idx >= 0) {
					articles.push(articlesData[idx]);
				}
			}
		});
		awesomeThings.projects.forEach((_id) => {
			if (projectsData) {
				const idx = projectsData.findIndex(({ id }) => id === _id);
				if (idx >= 0) {
					projects.push(projectsData[idx]);
				}
			}
		});
	}

	return {
		props: {
			data: {
				projects,
				articles: articles.reverse()
			}
		}
	};
};
