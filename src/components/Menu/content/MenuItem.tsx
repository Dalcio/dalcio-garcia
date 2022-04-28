import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

import { RouteColorName } from '@theme/system/colors.types';
import { MenuItemProps } from './types';
import { apeerLetter } from '../btn/animations';

export const fadeInLeftToRight = keyframes`
 from {
    right: 100%;
  }
  to {
    right: 0;
  }
`;

export const rotateLetter = keyframes`
 from {
    transform: rotateX(0)
  }
  to {
    transform: rotateX(-360deg)
  }
`;

const ItemLink = styled.a<{ color: RouteColorName }>`
	cursor: pointer;
	font-size: 40px;
	display: inline-block;
	letter-spacing: 4px;

	&:hover:not(.is-active) {
		opacity: 0.6;
	}

	& > span:first-of-type {
		text-transform: capitalize;
	}

	&.is-active {
		width: 100%;

		& > span {
			position: relative;
			z-index: 1;
			background: ${({ color, theme }) => theme.colors.menu};
			border: 1px solid ${({ color, theme }) => theme.colors[color]};
		}

		& > span:first-of-type {
			display: inline-block;
			background: ${({ color, theme }) => theme.colors[color]};
			color: ${({ color, theme }) => theme.colors.text};
			background: ${({ color, theme }) => theme.colors[color]};
			animation: ${rotateLetter} 900ms ease-in-out;
		}

		&:after {
			content: '';
			position: absolute;
			inset: 0;
			right: 0;
			border: 1px solid ${({ color, theme }) => theme.colors[color]};
			background: ${({ color, theme }) => theme.colors[color]};
			animation: ${fadeInLeftToRight} 900ms ease;
		}
	}
`;

const MenuItem = ({ name, current }: MenuItemProps) => (
	<li>
		<Link href={`/${name === 'home' ? '' : name}`}>
			<ItemLink
				color={current}
				className={current === name ? 'is-active' : undefined}
			>
				<span>{name.substr(0, 2)}</span>
				<span>{name.substr(2)}</span>
			</ItemLink>
		</Link>
	</li>
);
export default MenuItem;
