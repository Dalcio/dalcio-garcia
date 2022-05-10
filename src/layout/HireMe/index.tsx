import { Subtitle } from '@components/common';
import { TriangleRightIcon, ChatBubbleIcon } from '@radix-ui/react-icons';
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

		:hover {
			.label {
				letter-spacing: 3px;
			}
		}

		.ico {
			border-radius: 50%;
			padding: ${t.space.md};
			background: ${t.colors.white};
			position: relative;
			z-index: 200;
			box-shadow: -1px 1px 3px 0 rgba(0, 0, 0, 0.7);
		}

		.label {
			transition: all 200ms ease-in-out;
			padding: ${t.space.sm};
			margin-right: ${t.space.sm};
			text-decoration: underline;
			text-transform: uppercase;
		}
	`
);

const href =
	'mailto:dalciomacuetegarcia@gmail.com?subject=Work With Dálcio Garcia - Frontend Developer';

export default function HireMe() {
	return (
		<HireMeContainer href={href}>
			<Subtitle className="label">Hire Me</Subtitle>
			<div className="ico">
				<ChatBubbleIcon />
			</div>
		</HireMeContainer>
	);
}
