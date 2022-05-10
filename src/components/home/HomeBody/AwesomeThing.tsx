import { Subtitle, Button } from '@components/common';
import styled, { css } from 'styled-components';

const Container = styled.div(
	({ theme: { space, media } }) => css`
		display: grid;
		grid-template-rows: auto auto auto;
		row-gap: ${space.lg};

		.awesome-logo {
			display: none;
		}

		${media.bp1} {
			grid-template-columns: auto 1fr;
			grid-template-rows: auto 1fr auto;
			gap: ${space.lg};

			.awesome-logo {
				grid-row: 1 / -1;
				display: block;
				width: 220px;
				height: 150px;
				object-fit: cover;
			}
		}
	`
);

type AwesomeThingProps = {
	url: string;
	name: string;
	imgSrc: string;
	desc: string;
};

export default function AwesomeThing({
	url,
	name,
	imgSrc,
	desc
}: AwesomeThingProps) {
	return (
		<Container>
			<img src={imgSrc} alt={name} className="awesome-logo" />
			<Subtitle type="subtitle-2" className="awesome-name">
				{name}
			</Subtitle>
			<div className="awesome-desc">{desc}</div>
			<div className="awesome-btn">
				<a href={url} target="blank">
					<Button>View {name}</Button>
				</a>
			</div>
		</Container>
	);
}
