import { Button, Title, Text, Subtitle } from '@components/common';
import { Article } from '@components/articles/ArticlesBody';

import Link from 'next/link';
import ProjectView from '@components/works/WorksBody/ProjectView';

import { HomeBodyContainer } from './styles';

export default function HomeBody() {
	return (
		<HomeBodyContainer>
			<Subtitle className="self-intro">
				I'm a <i>Software Engineer</i> passionate about creating the front end
				of <strong>web</strong> and <strong>mobile</strong> apps.
			</Subtitle>
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
					<ProjectView
						className="home"
						name="Project Name"
						desc="vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "
						github="https://github.com/dalcio"
						page="https://linkedin.com/in/dalcio"
						stack="React, styled components, ...."
						date="June, 10 2022"
					/>
					<Title type="small">Some articles</Title>
					<Article
						home
						className="article-from-home"
						date="May 11 2022"
						name="Name of the Article"
						link="https://es.lipsum.com/"
						desc="El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aqu"
					/>
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
