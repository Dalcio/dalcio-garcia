import { Title } from '@components/common';
import styled, { css } from 'styled-components';
import ProjectView from './ProjectView';

const WorksBodyContainer = styled.main(
	({ theme: { space, sizes, media } }) => css`
		display: grid;
		align-content: center;
		max-width: unset !important;
		row-gap: calc(2 * ${space.md});

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
				<ProjectView
					name="Project Name"
					desc="vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "
					github="https://github.com/dalcio"
					page="https://linkedin.com/in/dalcio"
					stack="React, styled components, ...."
					date="June, 10 2022"
				/>
				<ProjectView
					name="Project Name"
					desc="vero eos et accusamus et iusto odio dignissimos"
					github="https://github.com/dalcio"
					page="https://linkedin.com/in/dalcio"
					date="June, 10 2022"
				/>
				<ProjectView
					name="Project Name"
					desc="vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "
					github="https://github.com/dalcio"
					page="https://linkedin.com/in/dalcio"
					stack="React, styled components, ...."
					date="June, 10 2022"
				/>
			</div>
		</WorksBodyContainer>
	);
}
