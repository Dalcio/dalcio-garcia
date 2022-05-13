import { Button, Subtitle, Text, Title } from '@components/common';
import styled, { css } from 'styled-components';

type ProjectViewProps = {
	name: string;
	desc: string;
	github?: string;
	page?: string;
	cover: string;
	stack?: string;
};

export const ProjectViewContainer = styled.div<{ cover: string }>(
	({ cover, theme: t }) => css`
		transition: all ${t.transitions.xFast} ease-in;
		border: 1px solid ${t.colors.border};
		display: grid;
		grid-template-rows: auto 1fr;

		&:hover {
			box-shadow: 0px 0px 10px #a5a7af;
			transform: scale(1.04);
		}

		.inner-container {
			display: grid;
			background: ${t.colors.white};
			grid-template-rows: 1fr auto;
			gap: ${t.space.md};
			padding: calc(2 * ${t.space.md});

			.about {
				display: grid;
				row-gap: ${t.space.md};

				footer {
					font-weight: bold;
				}
			}

			.btns {
				display: grid;
				grid-template-columns: 1fr 1fr;
				column-gap: ${t.space.md};

				a,
				button {
					width: 100%;
				}
			}
		}

		.cover {
			width: 100%;
			height: 200px;
			background: ${t.colors.works} ${cover} no-repeat;
		}

		${t.media.bp1} {
			.cover {
				height: 300px;
			}
		}
	`
);

export default function ProjectView({
	name,
	desc,
	cover,
	github,
	page,
	stack
}: ProjectViewProps) {
	return (
		<ProjectViewContainer cover={`url('${cover}')`}>
			<div className="cover" />
			<div className="inner-container">
				<div className="about">
					<Subtitle type="subtitle-2">{name}</Subtitle>
					<div>{desc}</div>
					{stack && <footer>{stack}</footer>}
				</div>
				<div className="btns">
					{github && (
						<a href={github} target="blank">
							<Button>Github</Button>
						</a>
					)}
					{page && (
						<a href={page} target="blank">
							<Button>Visit</Button>
						</a>
					)}
				</div>
			</div>
		</ProjectViewContainer>
	);
}
