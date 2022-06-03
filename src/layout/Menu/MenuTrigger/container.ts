import styled, { css } from 'styled-components';
import { Theme } from '@styles';

import { aperLetter } from './keyframes';

import createSpanAnDelay from './createSpanAnDelay';

const btnCloseCss = (theme: Theme) => css`
	& > .btn-close {
		margin-top: calc(${theme.space.lg} + ${theme.space.md} - 2px);
		margin-left: calc(${theme.space.lg} + ${theme.space.md} - 2px);
		z-index: 110;

		display: inline-block;
		overflow: hidden;
		font: bold small-caps normal 13px Arial, Helvetica, sans-serif;
		letter-spacing: 3px;
		transition: all ${theme.transitions.xFast} ease-in;

		&:hover {
			font-size: 14px;
			border-bottom: 2px solid ${theme.colors.text};
		}

		& > span {
			display: inline-block;
			animation: ${aperLetter} ${theme.transitions.fast} ease-in-out;
		}

		${createSpanAnDelay()}
	}
`;

const btnOpenCss = (theme: Theme) => css`
	& > .btn-open {
		overflow: hidden;
		height: 30px;
		width: 30px;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

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
			transform: translateX(12px);
		}

		&:hover {
			& > div {
				transform: scaleX(2);
				transform-origin: left center;
			}

			& > div:first-of-type {
				transform-origin: right center;
				transform: translateX(12px) scaleX(2);
			}
		}
	}
`;

const MenuTriggerContainer = styled.button`
	cursor: pointer;
	outline: unset;
	background: none;
	border: none;
	padding: 0;

	display: flex;

	${({ theme }) => css`
		.close-pane {
			position: fixed;
			background: ${theme.colors.primary};
			inset: calc(2 * ${theme.space.md});
			opacity: 0.4;
		}

		${btnOpenCss(theme)};
		${btnCloseCss(theme)};
	`}
`;

export default MenuTriggerContainer;
