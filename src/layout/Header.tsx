import { styled } from '@styles';

const Container = styled('div', {
	position: 'absolute',
	inset: 'calc(2 * $md)',
	bottom: 'unset',
	// width: '100%',
	background: 'green',

	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',

	'& >..download-cv': {
		position: 'fixed'
	}
});

const Header = () => (
	<Container>
		<h1>MenuF</h1>
		<button className="download-cv">Download CV</button>
	</Container>
);

export default Header;
