import { Subtitle } from '@components/common';
import { ChatBubbleIcon } from '@radix-ui/react-icons';
import styled, { css } from 'styled-components';

const HireMeContainer = styled('a')(
	({ theme: t }) => css`
		position: fixed;
		z-index: 200;
		bottom: calc(2 * ${t.space.lg});
		right: calc(2 * ${t.space.lg});

		border: unset;
		display: flex;
		align-items: center;
		text-decoration: none;
		color: ${t.colors.text};

		.back-ball {
			width: 50px;
			height: 50px;
			border-radius: 50%;
			position: absolute;
			right: 10px;
			top: 10px;
			background: ${t.colors.blue[1]};
			border: 1px solid #fff;
		}

		.ico {
			position: relative;
			z-index: 200;
			width: 50px;
			height: 50px;
			border-radius: 50%;

			display: grid;
			place-items: center;

			& > * {
				stroke: 2px;
				display: block;
			}
			background: ${t.colors.white};
			border: 1px solid #fff;
		}

		.label {
			padding: ${t.space.md} ${t.space.lg};
			border: 1px solid #fff;
			border-radius: ${t.radii.lg};
			background: ${t.colors.blue[1]};
		}

		:hover {
			/* .label {
				letter-spacing: 3px;
				transition: all 200ms ease-in-out;
			} */

			/* div {
				transform: scale(1.2);
				transform-origin: center;
				transition: all 200ms ease-in-out;
			} */
			.ico {
				transform: scale(1.2);
				transform-origin: center;
				transition: all 200ms ease-in-out;
			}
		}
	`
);

const href =
	'mailto:dalciomacuetegarcia@gmail.com?subject=Work With Dálcio Garcia - Frontend Developer';

export default function HireMe() {
	return (
		<HireMeContainer href={href}>
			<Subtitle className="label">Hire me</Subtitle>
			<div className="back-ball" />
			<div className="ico">
				<ChatBubbleIcon />
			</div>
		</HireMeContainer>
	);
}
