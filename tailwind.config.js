module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				'90vh': '90vh',
				'10vh': '10vh',
				bnav: '98%',
				bnavb: '0.5%',
			},
			colors: {
				primary: '#e63946',
				secondary: '#457b9d',
				bg: '#f1faee',
				accent: '#a8dadc',
				dark: '#1d3557',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
