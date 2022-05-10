import styled, { css } from 'styled-components';

const CardContainer = styled.div(
	({ theme: t }) => css`
		overflow: hidden;
		position: relative;

		& > .content {
			position: relative;
			z-index: 1;
			border: ${t.borders['hand-drawn-1']};
		}

		& > .diagonal {
			position: absolute;
			top: ${t.space.md};
			left: ${t.space.md};
			right: -${t.space.md};
			bottom: -${t.space.md};
			border: ${t.borders['hand-drawn-1']};
		}
	`
);

const Card = ({ children }) => (
	<CardContainer>
		<div className="content">{children}</div>
		<div className="diagonal" />
	</CardContainer>
);

export default Card;
