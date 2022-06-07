import { Button, Title } from '@components/common';
import styled, { css } from 'styled-components';

export type ProjectViewProps = {
	name: string;
	desc: string;
	github?: string;
	live?: string;
	date: string;
	stack?: string;
	role?: string;
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
		}

		.btns {
			display: flex;
			column-gap: ${t.space.md};

			grid-area: btns;

			a,
			button {
				flex-grow: 1;
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
	live,
	role,
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
				<footer>
					{stack && (
						<section>
							<strong>
								<i>{stack}</i>
							</strong>
						</section>
					)}
					{role && (
						<section>
							<strong>What I did? </strong>
							{role}
						</section>
					)}
				</footer>
			</div>
			<div className="btns">
				{github && (
					<a href={github} target="blank">
						<Button>View on github</Button>
					</a>
				)}
				{live && (
					<a href={live} target="blank">
						<Button>View live</Button>
					</a>
				)}
			</div>
		</ProjectViewContainer>
	);
}
