import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { NavBar } from './components/NavBar/NavBar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<div
			style={{
				backgroundImage: 'url(/tacos.jpg)',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				width: '100vw',
				height: '100vh',
				margin: '0px',
				borderStyle: 'none',
				padding: '0px'
			}}
		>
			<NavBar />
			<App />
		</div>
	</ThemeProvider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
