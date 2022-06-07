import { Title, Text, Subtitle } from '@components/common';
import styled, { css } from 'styled-components';

export type ArticleProps = {
	name: string;
	date: string;
	desc: string;
	link: string;
	home?: boolean;
	className?: string;
};

export const ArticleContainer = styled.a(
	({ theme: t }) => css`
		text-decoration: none;
		display: inline-block;
		color: ${t.colors.text};

		.date {
			margin-bottom: ${t.space.md};
			color: ${t.colors.primary};
		}

		:hover {
			opacity: 0.8;
			cursor: pointer;
			&:not(:last-of-type) {
				border-bottom-color: rgba(0, 0, 0, 0.8);
			}
		}

		&:not(:last-of-type) {
			margin-bottom: calc(3 * ${t.space.lg});
			padding-bottom: ${t.space.lg};
			border-bottom: 1px solid ${t.colors.border};
		}

		${t.media.bp1} {
			display: inline-grid;
			grid-template-columns: 0.4fr 0.6fr;
			column-gap: ${t.space.md};
		}
	`
);

export function Article({
	home,
	date,
	name,
	desc,
	link,
	className
}: ArticleProps) {
	return (
		<ArticleContainer className={className} href={link} target="blank">
			<div>
				{(!home && (
					<>
						<Subtitle className="date">
							<small>Article written on</small> {date}
						</Subtitle>
						<Title type="small" className="name">
							{name}
						</Title>
					</>
				)) || (
					<>
						<Subtitle type="subtitle-3" className="date">
							<small>Article written on</small> {date}
						</Subtitle>
						<Subtitle type="subtitle-2" className="name">
							{name}
						</Subtitle>
					</>
				)}
			</div>
			<Text className="desc">{desc}</Text>
		</ArticleContainer>
	);
}
