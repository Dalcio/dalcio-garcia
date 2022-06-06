import styled, { css } from 'styled-components';
import { Theme } from '@styles';

import { aperLetter } from './keyframes';

import createSpanAnDelay from './createSpanAnDelay';

const btnCloseCss = (theme: Theme) => css`
	& > .btn-close {
		position: absolute;

		margin-top: ${theme.space.md};
		margin-left: calc(${theme.space.lg} + ${theme.space.md} - 2px);
		z-index: 110;

		display: inline-block;
		overflow: hidden;
		font: bold small-caps normal 13px Arial, Helvetica, sans-serif;
		letter-spacing: 3px;
		transition: all ${theme.transitions.xFast} ease-in;

		&:hover {
			border-bottom: 2px solid ${theme.colors.text};
		}

		/* & > span {
			display: inline-block;
			animation: ${aperLetter} ${theme.transitions.fast} ease-in-out
				${theme.transitions.fast};
		} */

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
			width: 18px;
			height: 2px;
			background: ${theme.colors.primary};
			transition: transform 1s ease;
		}

		& > div:nth-of-type(2) {
			width: 100%;
		}

		& > div:first-of-type {
			transform: translateX(18px);
		}

		&:hover {
			& > div {
				transform: scaleX(2);
				transform-origin: left center;
			}

			& > div:first-of-type {
				transform-origin: right center;
				transform: translateX(18px) scaleX(2);
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
			inset: 0;
			opacity: 0.4;
		}

		${btnOpenCss(theme)};
		${btnCloseCss(theme)};
	`}
`;

export default MenuTriggerContainer;
