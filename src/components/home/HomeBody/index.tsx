import { Button, Title, Text, Subtitle } from '@components/common';
import {
	Article,
	ArticleProps
} from '@components/articles/ArticlesBody/Article';
import ProjectView, {
	ProjectViewProps
} from '@components/works/WorksBody/ProjectView';

import Link from 'next/link';

import { HomeBodyContainer } from './styles';

export type HomeBodyProps = {
	articles: (ArticleProps & { id: number })[];
	projects: (ProjectViewProps & { id: number })[];
};

export default function HomeBody({ articles, projects }: HomeBodyProps) {
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
						awesome systems with awesome people, around the web bring to life
						creative things.
					</Text>
				</div>
				<Button>
					<Link href="/works">See my approach</Link>
				</Button>
			</div>
			<div className="awesome-things">
				<Title type="small">Some projects</Title>
				<div className="the-things">
					{projects && (
						<>
							{projects.map(({ id, ...project }) => (
								<ProjectView {...project} key={id} />
							))}
						</>
					)}
					<Title type="small">Some articles</Title>
					{articles && (
						<>
							{articles.map(({ id, ...article }) => (
								<Article {...article} key={id} />
							))}
						</>
					)}
				</div>
			</div>
		</HomeBodyContainer>
	);
}
