import { Subtitle } from '@components/common';
import styled, { css } from 'styled-components';

export const SkillsContainer = styled.div(
	({ theme: t }) => css`
		margin: ${t.space.lg} 0;
		display: flex;
		flex-wrap: wrap;
		gap: ${t.space.sm};
		text-align: center;
		max-width: ${t.sizes['w-max']};

		.group {
			display: flex;
			flex-direction: column;
			gap: ${t.space.sm};
			text-align: center;
			flex-grow: 1;
		}

		.item {
			flex-grow: 1;
			padding: ${t.space.md};
			border: 1px solid ${t.colors.border};
			border-radius: ${t.radii.sm};
			display: grid;
			place-items: center;

			:hover {
				transition: all ${t.transitions.xFast} ease-in;
				background-color: ${t.colors['border']};
			}
		}

		.fill {
			background-color: ${t.colors['border']};
		}

		&:last-of-type {
			margin-bottom: 0;
		}
	`
);

export default function Skills() {
	return (
		<div>
			<Subtitle>
				<strong>Fundamental**</strong>
			</Subtitle>
			<SkillsContainer>
				<div className="item fill">Javascript</div>
				<div className="item fill">Typescript</div>
				<div className="item fill">Node Js</div>
				<div className="item fill">React Js</div>
			</SkillsContainer>
			<Subtitle>
				<strong>ReactJs*</strong> based frameworks
			</Subtitle>
			<SkillsContainer>
				<div className="item">Next Js</div>
				<div className="group">
					<div className="item">Expo</div>
					<div className="item">React Native</div>
				</div>
				<div className="group">
					<div className="item">Jest</div>
					<div className="item">React Testing Libraries</div>
					<div className="item">Storybook... </div>
				</div>
			</SkillsContainer>
		</div>
	);
}
