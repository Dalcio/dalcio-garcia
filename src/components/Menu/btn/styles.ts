import styled, { css } from 'styled-components';

import { apeerLetter, strechLeftRight } from './animations';

import getFoourSpanWithAnimationDelay from './getFoourSpanWithAnimationDelay';

const btnCloseCss = css`
	& > .btn-close {
		display: inline-block;
		overflow: hidden;
		font: bold small-caps normal 12px Arial, Helvetica, sans-serif;
		letter-spacing: 3px;
		transition: font-size 100ms ease-in;

		&:hover {
			font-size: 13px;
		}

		& > span {
			display: inline-block;
			animation: ${apeerLetter} 200ms ease-in-out;
		}

		${getFoourSpanWithAnimationDelay()}
	}
`;

const btnOpenCss = css`
	& > .btn-open {
		overflow: hidden;
		display: grid;
		row-gap: 5px;

		& > div {
			width: 30px;
			height: 4px;
			background: #000;
		}

		& > div:not(:nth-of-type(2)) {
			width: 18px;
			animation: ${strechLeftRight} 2s ease infinite alternate-reverse;
		}

		& > div:nth-of-type(3) {
			animation-direction: alternate;
		}

		&:hover {
			& > div {
				transition: width 1s ease;
				width: 30px;
				animation: none;
			}
		}
	}
`;

export const MenuBtnContainer = styled.button`
	cursor: pointer;
	position: absolute;
	top: ${({ theme }) => theme.space.md};
	left: ${({ theme }) => theme.space.md};

	background: none;
	border: none;

	${btnCloseCss}
	${btnOpenCss}
`;
