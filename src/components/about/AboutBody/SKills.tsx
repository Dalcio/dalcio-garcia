import styled, { css } from 'styled-components';

const SkillsContainer = styled.div(
	({ theme: t }) => css`
		display: flex;
		flex-wrap: wrap;
		gap: ${t.space.sm};
		text-align: center;
		max-width: ${t.sizes['w-700']};

		.item {
			flex-grow: 1;
			padding: ${t.space.md};
			border: 1px solid ${t.colors.border};

			:hover {
				transition: all ${t.transitions.xFast} ease-in;
				color: white;
				background-color: ${t.colors['border']};
			}
		}

		.item.more {
			letter-spacing: 5px;
			text-transform: lowercase;
		}
	`
);

export default function Skills() {
	return (
		<SkillsContainer>
			<div className="item">HTML 5</div>
			<div className="item">css 3</div>
			<div className="item">Javascript</div>
			<div className="item">Typescript</div>
			<div className="item">Node Js</div>
			<div className="item">React Js</div>
			<div className="item">Next Js</div>
			<div className="item">React Native</div>
			<div className="item">Expo</div>
			<div className="item">Redux</div>
			<div className="item">Jest</div>
			<div className="item">Storybook</div>
			<div className="item">React Testing Libraries</div>
			<div className="item">Styled Components</div>
			<div className="item">Mantine UI</div>
			<div className="item more">Learn when necessary</div>
		</SkillsContainer>
	);
}
