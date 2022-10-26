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
			'dark',
		],
	},
	plugins: [require('daisyui')],
};
