import React from 'react';
import { Box, Grid } from '@mui/material';
import css from './NavBar.module.css';

export function NavBar() {
	return (
		<Box sx={{ bgcolor: 'primary.main', width: '100%', height: '100px' }}>
			<nav className={css.navContainer}>
				<h1 className={css.header}>Hello Foodie! </h1>
				<div className={css.iconsFlex}>
					<img src="/logo192.png" style={{ height: '2rem', width: '2rem' }} />
					<img src="/logo192.png" style={{ height: '2rem', width: '2rem' }} />
					<img src="/logo192.png" style={{ height: '2rem', width: '2rem' }} />
					<img src="/logo192.png" style={{ height: '2rem', width: '2rem' }} />
				</div>
			</nav>
		</Box>
	);
}
