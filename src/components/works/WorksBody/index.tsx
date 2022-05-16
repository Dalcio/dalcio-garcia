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
			max-width: ${sizes['w-500']};
		}

		.section-head {
			margin-bottom: ${space.lg};
		}

		.projects {
			display: grid;
			gap: ${space.md};

			${media.bp1} {
				grid-template-columns: 1fr 1fr;
			}
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
					cover="https://cdn.vox-cdn.com/thumbor/8mDnaewReT78MFwXUsOJGp9u64Q=/0x0:2732x1536/920x0/filters:focal(0x0:2732x1536):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19819048/News_Feed.jpg"
				/>
				<ProjectView
					name="Project Name"
					desc="vero eos et accusamus et iusto odio dignissimos"
					github="https://github.com/dalcio"
					page="https://linkedin.com/in/dalcio"
					cover="https://cdn.vox-cdn.com/thumbor/8mDnaewReT78MFwXUsOJGp9u64Q=/0x0:2732x1536/920x0/filters:focal(0x0:2732x1536):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19819048/News_Feed.jpg"
				/>
				<ProjectView
					name="Project Name"
					desc="vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "
					github="https://github.com/dalcio"
					page="https://linkedin.com/in/dalcio"
					stack="React, styled components, ...."
					cover="https://cdn.vox-cdn.com/thumbor/8mDnaewReT78MFwXUsOJGp9u64Q=/0x0:2732x1536/920x0/filters:focal(0x0:2732x1536):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19819048/News_Feed.jpg"
				/>
			</div>
		</WorksBodyContainer>
	);
}
