import styled, { css } from 'styled-components';
import { Colors } from '@styles';
import { FC } from 'react';

export type CardProps = {
	bg?: Colors;
};

const CardContainer = styled.div<CardProps>(
	({ bg, theme: { colors, space } }) => css`
		width: 200px;
		height: 200px;
		padding: ${space.md};
		background: ${colors[bg ?? 'menu']};
	`
);

const Card: FC<CardProps> = ({ children, ...rest }) => {
	return (
		<CardContainer {...rest}>
			<div className="card-diagonal" />
			<div className="card-wrapper">{children}</div>
		</CardContainer>
	);
};
export default Card;
