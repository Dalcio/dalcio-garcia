import { Button, Subtitle, Text, Title } from '@components/common';
import styled, { css } from 'styled-components';

type ProjectViewProps = {
	name: string;
	desc: string;
	github?: string;
	page?: string;
	date: string;
	stack?: string;
	className?: string | 'home';
};

export const ProjectViewContainer = styled.div(
	({ theme: t }) => css`
		min-height: 245px;
		display: flex;
		flex-direction: column;
		gap: ${t.space.md};
		border: 1px solid transparent;
		transition: all ${t.transitions.xFast} ease-in;
		
		.desc {
			flex-grow: 1;
		}

		.desc > footer {
			grid-area: footer;
			font-weight: bold;
		}

		.btns {
			display: grid;
			grid-template-columns: 1fr 1fr;
			column-gap: ${t.space.md};

			grid-area: btns;

			a,
			button {
				width: 100%;
			}
		}

		${t.media.bp1} {
			display: grid;
			gap: ${t.space.md};
			grid-template-areas:
				'head desc'
				'head desc'
				'empty btns';
			grid-template-columns: 0.4fr 0.6fr;
			grid-template-rows: auto 1fr auto;

			.head {
				grid-area: head;
			}

			.desc {
				grid-area: desc;
			}

			.btns {
				grid-area: btns;
			}
		}

		&:not(&.home) {
			padding: calc(2 * ${t.space.md});
		}

		@media (hover: none) {
			padding: calc(2 * ${t.space.md});
			border-color: ${t.colors.border};
			border-radius: ${t.radii['round-md']};
		}

		&:hover {
			padding: calc(2 * ${t.space.md});
			border-color: ${t.colors.border};
			border-radius: ${t.radii.sm};
		}
	`
);

export default function ProjectView({
	name,
	desc,
	date,
	github,
	page,
	stack,
	className
}: ProjectViewProps) {
	return (
		<ProjectViewContainer className={className}>
			<div className="head">
				<p className="date">{date}</p>
				<Title type="small" className="title">
					{name}
				</Title>
			</div>
			<div className="desc">
				<div>{desc}</div>
				{stack && <footer>{stack}</footer>}
			</div>
			<div className="btns">
				{github && (
					<a href={github} target="blank">
						<Button bg="works">Github</Button>
					</a>
				)}
				{page && (
					<a href={page} target="blank">
						<Button bg="works">Visit</Button>
					</a>
				)}
			</div>
		</ProjectViewContainer>
	);
}
