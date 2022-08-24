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
	platform?: string;
	cover?: string;
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

		.head {
			position: relative;

			& > .platform {
				position: absolute;
				font-size: ${t.fontSizes.xs};
				padding: ${t.space.sm} ${t.space.md};
				border-radius: ${t.radii.sm};
				background: ${t.colors.border};
				top: ${t.space.sm};
				right: 0;

				@media (hover: hover) {
					background: ${t.colors.white};
				}
			}

			.cover {
				width: 100%;
				height: 200px;
				border-radius: ${t.radii.sm};
				overflow: hidden;

				& > img {
					transition: transform ${t.transitions.xFast} ease-in;
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}

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
			gap: ${t.space.lg};
			grid-template-areas:
				'head desc'
				'head desc'
				'head btns';
			grid-template-columns: 0.4fr 0.6fr;
			grid-template-rows: auto 1fr auto;

			.head {
				grid-area: head;
				position: relative;
				height: 100%;

				& > .platform {
					top: unset;
					right: unset;
					bottom: ${t.space.sm};
					left: ${t.space.sm};
				}
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

			.head {
				& > .platform {
					background: ${t.colors.border};
				}

				& > .cover > img {
					transform: scale(1.2);
				}
			}
		}
	`
);

export default function ProjectView({
	name,
	desc,
	date,
	github,
	live,
	platform,
	role,
	stack,
	cover,
	className
}: ProjectViewProps) {
	return (
		<ProjectViewContainer className={className}>
			<div className="head">
				<p className="date">{date}</p>
				<Title type="small" className="title">
					{name}
				</Title>
				{cover && (
					<div className="cover">
						<img src={cover} alt={name} />
					</div>
				)}
				{platform && <div className="platform">{platform}</div>}
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
