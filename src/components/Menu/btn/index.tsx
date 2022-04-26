import { MenuBtnContainer } from './styles';
import { MenuBtnProps } from './types';

const close = (
	<span className="btn-close">
		{'CLOSE'.split('').map((letter) => (
			<span key={letter}>{letter}</span>
		))}
	</span>
);

const hamburgerBtn = (
	<div className="btn-open">
		<div />
		<div />
		<div />
	</div>
);

const MenuBtn = ({ open, handleOpen }: MenuBtnProps) => (
	<MenuBtnContainer onClick={handleOpen}>
		{(open && close) || hamburgerBtn}
	</MenuBtnContainer>
);

export default MenuBtn;
