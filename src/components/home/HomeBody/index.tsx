import { Button, Title, Text } from '@components/common';
import { Article } from '@components/articles/ArticlesBody';

import awesomeData from '@data/awesome-things';
import Link from 'next/link';

import { HomeBodyContainer } from './styles';

import AwesomeThing from './AwesomeThing';

export default function HomeBody() {
	return (
		<HomeBodyContainer>
			<div className="intro">
				<Title underline>Let´s build something awesome together.</Title>
				<div className="intro-content">
					<Text>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries
					</Text>
				</div>
				<Button>
					<Link href="/works">See my approach</Link>
				</Button>
			</div>
			<div className="awesome-things">
				<Title type="small">Awesome Things</Title>
				<div className="awesome-intro">
					<Text>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</Text>
				</div>
				<div className="the-things">
					{awesomeData.map((props) => (
						<AwesomeThing {...props} key={props.name} />
					))}
					<Article
						home
						className="article-from-home"
						date="May 11 2022"
						name="Name of the Article"
						link="https://es.lipsum.com/"
						desc="El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aqu"
					/>
				</div>
			</div>
		</HomeBodyContainer>
	);
}
