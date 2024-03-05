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
			'green-gradient': 'linear-gradient(135deg, #79F1A4 0%, #0E5CAD 100%)',
			'orange-gradient':
				'linear-gradient(135.73deg, #FF9865 0%, #EF3031 110.55%)',
		},
		boxShadow: {
			nav: '0px 0px 12px 0 #1026490F',
		},
	},
	plugins: [],
}
export default config
