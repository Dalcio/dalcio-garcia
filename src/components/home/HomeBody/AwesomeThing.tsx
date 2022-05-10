import { Subtitle, Button } from '@components/common';
import styled, { css } from 'styled-components';

const Container = styled.div(
	({ theme: { space, media } }) => css`
		display: grid;
		grid-template-columns: auto auto;
		grid-template-rows: auto auto;
		row-gap: ${space.lg};

		.awesome-logo {
			grid-row: 1 / -1;
			display: none;
		}

		${media.bp1} {
			grid-template-columns: 0.8fr 1fr;
			grid-template-rows: auto 1fr auto;

			.awesome-logo {
				display: block;
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
			<Subtitle className="awesome-name">{name}</Subtitle>
			<div className="awesome-desc">{desc}</div>
			<div className="awesome-btn">
				<Button>View {name}</Button>
			</div>
		</Container>
	);
}
