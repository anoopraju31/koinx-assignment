import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		backgroundImage: {
			'blue-gradient':
				'linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)',
		},
		boxShadow: {
			nav: '0px 0px 12px 0 #1026490F',
		},
	},
	plugins: [],
}
export default config
