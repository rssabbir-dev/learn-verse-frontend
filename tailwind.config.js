/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				customPrimary: '#7FBF50',
			},
		},
	},
	plugins: [require('daisyui')],
};
