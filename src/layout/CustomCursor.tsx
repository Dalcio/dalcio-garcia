import { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

const CursorStructure = styled.div(
	({ theme: { colors } }) =>
		css`
			@media (hover: hover) {
				position: fixed;
				z-index: 1000;
				width: 36px;
				height: 36px;
				border-radius: 50%;
				border: 1px solid ${colors.black};
				background: unset;
				transform: translate(0, 0);
			}
		`
);

export default function CustomCursor() {
	const cursorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.addEventListener('mousemove', function (e) {
			if (cursorRef.current) {
				const { clientX, clientY } = e;
				const mouseX = clientX + 4;
				const mouseY = clientY + 4;
				cursorRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
			}
		});
	}, []);

	return <CursorStructure ref={cursorRef} />;
}
