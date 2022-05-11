import styled, { css } from 'styled-components';

import { Title, Text, Subtitle } from '@components/common';

const ArticlesBodyContainer = styled.main(
	({ theme: { space, sizes } }) => css``
);

type ArticleProps = {
	name: string;
	date: string;
	desc: string;
	link: string;
};

const ArticleContainer = styled.a(
	({ theme: t }) => css`
		text-decoration: none;
		display: inline-block;
		color: ${t.colors.text};

		.date {
			margin-bottom: ${t.space.md};
		}

		:hover {
			opacity: 0.8;
			cursor: pointer;
			&:not(:last-of-type) {
				border-bottom-color: rgba(0, 0, 0, 0.8);
			}
		}

		&:not(:last-of-type) {
			margin-bottom: calc(3 * ${t.space.lg});
			padding-bottom: ${t.space.lg};
			border-bottom: 1px solid ${t.colors.border};
		}

		${t.media.bp1} {
			display: inline-grid;
			grid-template-columns: 0.4fr 1fr;
			column-gap: ${t.space.md};
		}
	`
);

const Article = ({ date, name, desc, link }: ArticleProps) => (
	<ArticleContainer href={link} target="blank">
		<Subtitle className="date">{date}</Subtitle>
		<div>
			<Title className="name">{name}</Title>
			<Text className="desc">{desc}</Text>
		</div>
	</ArticleContainer>
);

export default function ArticlesBody() {
	return (
		<ArticlesBodyContainer>
			<Article
				date="May 11 2022"
				name="Name of the Article"
				link="https://es.lipsum.com/"
				desc="El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aqu"
			/>
			<Article
				date="May 11 2022"
				name="Name of the Article"
				link="https://es.lipsum.com/"
				desc="El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aqu"
			/>
		</ArticlesBodyContainer>
	);
}
