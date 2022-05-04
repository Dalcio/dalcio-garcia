import { BsLinkedin, BsGithub } from 'react-icons/bs';

const socialNetworks = (
	<div className="social-networks">
		<a href="https://linkedin.com/in/dalcio-garcia/" target="_bllank">
			<BsLinkedin />
		</a>
		<a href="https://github.com/dalcio" target="_bllank">
			<BsGithub />
		</a>
	</div>
);

export default function Menu() {
	return (
		<div>
			Menu
			{socialNetworks}
		</div>
	);
}
