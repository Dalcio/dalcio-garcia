import { Theme } from '@theme/styled';
import styled, { css } from 'styled-components';

import { apeerLetter } from './animations';

import getFoourSpanWithAnimationDelay from './getFoourSpanWithAnimationDelay';

const btnCloseCss = (theme: Theme) => css`
	& > .btn-close {
		display: inline-block;
		overflow: hidden;
		font: bold small-caps normal 12px Arial, Helvetica, sans-serif;
		letter-spacing: 3px;
		transition: font-size ${theme.durations[1]} ease-in;

		&:hover {
			font-size: 13px;
		}

		& > span {
			display: inline-block;
			animation: ${apeerLetter} ${theme.durations[2]} ease-in-out;
		}

		${getFoourSpanWithAnimationDelay()}
	}
`;

const btnOpenCss = (theme: Theme) => css`
	& > .btn-open {
		overflow: hidden;
		display: grid;
		row-gap: ${theme.space.sm};

		& > div {
			width: 14px;
			height: 3px;
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

export const MenuBtnContainer = styled.button`
	cursor: pointer;
	position: absolute;
	top: ${({ theme }) => `calc(2 * ${theme.space.md})`};
	left: ${({ theme }) => `calc(2 * ${theme.space.md})`};

	background: none;
	border: none;

	${({ theme }) => btnCloseCss(theme)}
	${({ theme }) => btnOpenCss(theme)}
`;
