import { Subtitle, Button } from '@components/common';
import styled, { css } from 'styled-components';

const Container = styled.div(
	({ theme: { space, media } }) => css`
		display: grid;
		grid-template-rows: auto auto auto;
		row-gap: ${space.lg};

		${media.bp1} {
			grid-template-columns: auto 1fr;
			grid-template-rows: auto auto;
			gap: ${space.lg};
		}

		.awesome-btn {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: ${space.lg};

			button {
				width: 100%;
			}
		}
	`
);

type AwesomeThingProps = {
	github?: string;
	name: string;
	page?: string;
	desc: string;
};

export default function AwesomeThing({
	github,
	name,
	page,
	desc
}: AwesomeThingProps) {
	return (
		<Container>
			<Subtitle type="subtitle-2" className="awesome-name">
				{name}
			</Subtitle>
			<div className="awesome-desc">{desc}</div>
			<div className="awesome-btn">
				<a href={github} target="blank">
					<Button>Github</Button>
				</a>
				<a href={page} target="blank">
					<Button>Visit Page</Button>
				</a>
			</div>
		</Container>
	);
}
