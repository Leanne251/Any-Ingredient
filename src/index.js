import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { Box } from '@chakra-ui/react';
import NavBar from './components/NavBar/NavBar';

ReactDOM.render(
	<React.StrictMode>
		<Box
			backgroundImage="url('/tacos.jpg')"
			backgroundPosition="center"
			backgroundRepeat="no-repeat"
			minHeight="100vh"
			w="100%"
			bgSize="cover"
			padding="0px"
		>
			<NavBar />
			<App />
		</Box>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
