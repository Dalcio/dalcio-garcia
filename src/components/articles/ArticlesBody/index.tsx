import articles from '@data/articles.json';

import { Article } from './Article';

export default function ArticlesBody() {
	return (
		articles && (
			<div>
				{articles.map(({ desc, id, name, link, date }) => (
					<Article desc={desc} name={name} link={link} date={date} key={id} />
				))}
			</div>
		)
	);
}
