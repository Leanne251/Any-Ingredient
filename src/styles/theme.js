import { createTheme } from '@mui/material';

const primaryColor = '#4D1371'; //darkPurple
const secondaryColor = '#CE7DA5'; // light pink
const thirdColor = '#BEE5BF'; // light green
const forthColor = '#FFD1BA'; // apricot

export const theme = createTheme({
	palette: {
		primary: {
			main: primaryColor
		},
		secondary: {
			main: secondaryColor
		},
		third: {
			main: thirdColor
		},
		forth: {
			main: forthColor
		}
	},
	typography: {
		// h1: {
		// 	fontFamily: 'Paytone One',
		// 	fontSize: '5rem',
		// 	color: '#fff',
		// 	'@media (min-width:600px)': {
		// 		fontSize: '1.5rem'
		// 	}
		// },
		body1: {
			fontFamily: 'Raleway, Arial',
			fontSize: 12,
			'@media (min-width:600px)': {
				fontSize: '1.5rem'
			}
		}
		// 	// [theme.breakpoints.up('md')]: {
		// 	// 	fontSize: '2.4rem'
		// 	//}
		// }
	}
});
