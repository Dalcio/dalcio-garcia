import styled, { css, keyframes } from 'styled-components';

const avAnimation = keyframes`
	0% {
		transform: skew(-8deg, -8deg);
	}

	25% {
		border-radius: 0;
	}
	
	50% {
		transform: skew(0deg, 0deg);
	}
	
	75% {
		border-radius: 20px;
	}

	100% {
		transform: skew(8deg, 8deg);
		
	}
`;

const avAnimationBefore = keyframes`
	25% {
		border-radius: 0;
	}

	75% {
		border-radius: 20px;
	}
`;

export const HomeHeaderContainer = styled.div(
	({ theme: { space, radii, colors, media } }) => css`
		display: flex;
		flex-direction: column;
		row-gap: calc(2 * ${space.lg});
		justify-content: center;

		text-align: center;

		.avatar {
			position: relative;

			& > .bg {
				position: absolute;
				height: 10rem;
				min-width: 70%;
				bottom: 0;
				left: calc(15%);
				background: ${colors.white};
				transform: skew(-8deg, -8deg);
				border-radius: ${radii['round-sm']};
				animation: ${avAnimation} 1.3s linear infinite alternate both;

				&: after {
					content: '';
					position: absolute;
					background: transparent;
					border: 1px solid ${colors.white};
					animation: ${avAnimationBefore} 1.3s linear infinite alternate both;
					border-left: unset;
					border-radius: 20px;
					width: 100%;
					bottom: -${space.md};
					top: -${space.md};
					right: -${space.md};
				}
			}

			#avatar {
				position: relative;
				z-index: 1;
				height: 10rem;

				@media screen and (min-width: 240px) {
					height: 15rem;
				}
			}
		}

		${media.bp1} {
			display: grid;
			justify-content: center;
			align-items: center;
			grid-template-areas:
				'avatar greetings empty'
				'avatar self-intro empty';
			grid-template-columns: 0.7fr 0.6fr;
			justify-items: center;
			gap: calc(4 * ${space.lg});
			text-align: right;

			& > * {
				width: 100%;
			}

			.greetings {
				grid-area: greetings;
				align-self: end;
			}

			.avatar {
				grid-area: avatar;

				& > .bg {
					height: 15rem;
					width: 100%;
				}

				#avatar {
					height: 20rem;
				}
			}

			.self-intro {
				grid-area: self-intro;
				align-self: start;
			}
		}

		@media screen and (max-width: 400px) {
			.self-intro {
				display: none;
			}
		}
	`
);
