import styled, { css } from 'styled-components';
import { Theme } from '@styles';

import { apeerLetter } from './keyframes';

import createSpanAnDelay from './createSpanAnDelay';

const btnCloseCss = (theme: Theme) => css`
	& > .btn-close {
		position: relative;
		z-index: 110;

		display: inline-block;
		overflow: hidden;
		font: bold small-caps normal 13px Arial, Helvetica, sans-serif;
		letter-spacing: 3px;
		transition: all ${theme.transitions.xFast} ease-in;

		&:hover {
			font-size: 14px;
		}

		& > span {
			display: inline-block;
			animation: ${apeerLetter} ${theme.transitions.fast} ease-in-out;
		}

		${createSpanAnDelay()}
	}
`;

const btnOpenCss = (theme: Theme) => css`
	& > .btn-open {
		overflow: hidden;
		display: grid;
		row-gap: ${theme.space.sm};

		& > div {
			width: 14px;
			height: 2px;
			background: ${theme.colors.primary};
			transition: transform 1s ease;
		}

		& > div:nth-of-type(2) {
			width: 26px;
		}

		& > div:first-of-type {
			transform: translatex(12px);
		}

		&:hover {
			& > div {
				transform: scaleX(2);
				transform-origin: left center;
			}

			& > div:first-of-type {
				transform-origin: right center;
				transform: translatex(12px) scaleX(2);
			}
		}
	}
`;

const MenuTriggerContainer = styled.button`
	cursor: pointer;
	position: relative;
	background: none;
	border: none;

	${({ theme }) => css`
		left: calc(2 * ${theme.space.md});

		.close-pane {
			position: fixed;
			/* z-index: 1 !important; */
			background: ${theme.colors.primary};
			inset: calc(2 * ${theme.space.md});
			opacity: 0.4;
		}

		${btnCloseCss(theme)}
		${btnOpenCss(theme)}
	`}
`;

export default MenuTriggerContainer;
