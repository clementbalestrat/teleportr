module.exports = {
	async redirects() {
		return [
			{
				source: '/',
				destination: 'https://portr.xyz',
				permanent: true,
			},
		];
	},
	images: {
		loader: 'imgix',
		path: '/',
	},
};
