import styled, { css } from 'styled-components';

import { Subtitle } from '@components/common';

const SkillsContainer = styled.div(
	({ theme: t }) => css`
		.stack {
			border: 1px solid ${t.colors.border};
			padding: ${t.space.md};
			text-align: center;
			max-width: ${t.sizes['w-500']};

			.head {
				margin: ${t.space.md};
				padding: ${t.space.md};
			}

			.row {
				display: flex;
				flex-direction: column;
				padding: ${t.space.md};
				border: 1px solid ${t.colors.border};

				${t.media.bp1} {
					flex-direction: row;
				}
			}

			.item {
				flex-grow: 1;
				margin: ${t.space.md};
				padding: ${t.space.md};
				border: 1px solid ${t.colors.border};
			}

			.item.more {
				letter-spacing: 5px;
				border: none;
				font-size: 16px;
				font-weight: bold;
			}

			.stack {
				margin: ${t.space.md} 0;

				.head {
					margin: 0;
					padding: ${t.space.md};
				}
			}
		}
	`
);

export default function Skills() {
	return (
		<SkillsContainer>
			<div className="stack">
				<Subtitle type="subtitle-2" className="head">
					Main Stack
				</Subtitle>
				<div className="row">
					<div className="item">HTML 5</div>
					<div className="item">css 3</div>
					<div className="item">Javascript</div>
				</div>
				<div className="stack">
					<Subtitle className="head">From Javascript</Subtitle>
					<div className="row">
						<div className="item">Typescript</div>
						<div className="item">Node Js</div>
						<div className="item">React Js</div>
					</div>
					<div className="stack">
						<Subtitle className="head">From React Js</Subtitle>
						<div className="row">
							<div className="item">Next Js</div>
							<div className="item">React Native</div>
							<div className="item">Redux</div>
							<div className="item more">...</div>
						</div>
					</div>
				</div>
			</div>
		</SkillsContainer>
	);
}
