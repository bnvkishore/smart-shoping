import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	logo: {
		display: 'flex',
		justifyContent: 'flex-end'
	}
}));

export default function PageLogo() {
	const classes = useStyles();
	return (
		<div className={classes.logo}>
				<img src='ss-logo-2.png' alt='logo' />
		</div>
	)
}