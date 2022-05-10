type Props = {
	url: string;
	name: string;
	imgSrc: string;
	desc: string;
};

const awesomeData = [
	{
		name: 'First Project',
		desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `,
		imgSrc:
			'https://dwu32cgxelq1c.cloudfront.net/local_newspapers/sites/110/2021/07/Aliche-_-Google-Images2-scaled.jpg',
		url:
			'https://dwu32cgxelq1c.cloudfront.net/local_newspapers/sites/110/2021/07/Aliche-_-Google-Images2-scaled.jpg'
	},
	{
		name: 'Some article',
		desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `,
		imgSrc:
			'https://dwu32cgxelq1c.cloudfront.net/local_newspapers/sites/110/2021/07/Aliche-_-Google-Images2-scaled.jpg',
		url:
			'https://dwu32cgxelq1c.cloudfront.net/local_newspapers/sites/110/2021/07/Aliche-_-Google-Images2-scaled.jpg'
	}
] as Array<Props>;

export default awesomeData;
