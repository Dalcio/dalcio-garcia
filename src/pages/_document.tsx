import React from 'react';
import Document, {
	DocumentInitialProps,
	DocumentContext,
	Html,
	Head,
	Main,
	NextScript
} from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => <App {...props} />
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: <>{initialProps.styles}</>
			};
		} finally {
		}
	}

	render(): JSX.Element {
		return (
			<Html lang="pt">
				<Head>
					<meta charSet="utf-8" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
