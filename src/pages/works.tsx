import Works from '@components/works';
import Head from 'next/head';

export default function WorksPage() {
	return (
		<>
			<Head>
				<title>My Works</title>
			</Head>
			<Works />
		</>
	);
}
