import MenuTriggerContainer from './container';

const close = (
	<>
		<span className="btn-close">
			{'CLOSE'.split('').map((letter) => (
				<span key={letter}>{letter}</span>
			))}
		</span>
		<div className="close-pane" />
	</>
);

const hamburgerBtn = (
	<div className="btn-open">
		<div />
		<div />
		<div />
	</div>
);

type MenuTriggerPros = {
	open: boolean;
	onCLick: () => void;
};

export default function MenuTrigger({ open, onCLick }: MenuTriggerPros) {
	return (
		<MenuTriggerContainer onClick={onCLick}>
			{(open && close) || hamburgerBtn}
		</MenuTriggerContainer>
	);
}
