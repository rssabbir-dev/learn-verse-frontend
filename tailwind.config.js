/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/colors/themes')[
						'[data-theme=light]'
					],
					primary: '#7FBF50',
					'primary-focus': '#529820',
				},
			},
			{
				dark: {
					...require('daisyui/src/colors/themes')[
						'[data-theme=dark]'
					],
					primary: '#1FB2A6',
					'primary-focus': '#198F85',
				},
			},
		],
	},
	plugins: [require('daisyui')],
};
