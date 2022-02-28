import Questions from '../Questions/Questions';
import { darkMode, lightMode } from '../../styles/theme';
import { React, useState } from 'react';
import './App.css';
import { ThemeProvider, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import NavBar from '../NavBar/NavBar';

import './App.css';

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(2),
		flexGrow: 1
	},
	title: {
		flexGrow: 1
	}
}));

function App() {
	const [ theme, setTheme ] = useState(true);
	const classes = useStyles();
	const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />;
	const appliedTheme = createTheme(theme ? lightMode : darkMode);

	return (
		<ThemeProvider theme={appliedTheme}>
			<NavBar />
			<div className={classes.root}>
				<IconButton edge="end" color="inherit" aria-label="mode" onClick={() => setTheme(!theme)}>
					{icon}
				</IconButton>

				<Questions />
			</div>
		</ThemeProvider>
	);
}

export default App;

//wrapper around questions, wrapper of components around and pass avalue into this, and components that wants to acess the value in the wrapper.
// passing down dispatch and and state in an object.
