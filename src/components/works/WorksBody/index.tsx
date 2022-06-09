import { Button, Title } from '@components/common';
import projects from '@data/projects.json';
import styled, { css } from 'styled-components';

import ProjectView, { ProjectViewProps } from './ProjectView';

const WorksBodyContainer = styled.div(
	({ theme: { space, sizes } }) => css`
		display: grid;
		align-content: center;
		row-gap: calc(2 * ${space.md});

		a {
			text-decoration: none;
			display: inline-block;
			display: grid;
		}

		.intro {
			max-width: ${sizes['w-700']};
		}

		.section-head {
			margin-bottom: ${space.lg};
		}

		.projects {
			display: grid;
			gap: ${space.md};
		}
	`
);

export default function WorksBody() {
	return (
		<WorksBodyContainer>
			<Title type="small" className="section-head">
				Some Things that I've Built
			</Title>
			<div className="projects">
				{projects && (
					<>
						{projects.map(({ id, ...project }) => (
							<ProjectView {...(project as ProjectViewProps)} key={id} />
						))}
					</>
				)}
			</div>
			<a href="https://github.com/dalcio/" target="blank">
				<Button>View More onGithub</Button>
			</a>
		</WorksBodyContainer>
	);
}
