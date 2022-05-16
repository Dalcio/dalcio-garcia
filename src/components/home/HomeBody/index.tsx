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
						From mobile app to web app, desktop app or{' '}
						<abbr title="Progress Web Apps">PWA</abbr>, I've been creating
						awesome systems with awesome people, arround the web bring to
						lifecreative things.
					</Text>
				</div>
				<Button>
					<Link href="/works">See my approach</Link>
				</Button>
			</div>
			<div className="awesome-things">
				<Title type="small">Open Things</Title>
				<div className="awesome-intro">
					<Text>
						When I have some time, I like to create open source stuff to
						practice, study and share knowledge with the dev community, as this
						process makes me learn more about something.
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
