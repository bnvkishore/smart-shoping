import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import PageLogo from '../Components/PageLogo';
import Product from '../Components/Product';
import { FRUITS_DATA } from '../constants';

const useStyles = makeStyles(theme => ({
	breadcrumbColor: {
		color: theme.palette.primary.main
	},
	container: {
		padding: theme.spacing(0, 5)
	},
	title: {
		margin: theme.spacing(0,0,4),
		color: theme.palette.primary.main,
		fontWeight: 'bold'
	},
}));

const fruitsData = FRUITS_DATA;

function Fruits() {
	const classes = useStyles();
	const history = useHistory();

	const handleClick = () => {
		history.push('/')
	};

	return (
		<div>
			<Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbColor}>
				<Link color="inherit" onClick={handleClick}>
					Home
				</Link>
				<Typography >Fruits</Typography>
			</Breadcrumbs>
			<PageLogo />
			<Box className={classes.container}>
				<div>
					<Typography variant="h5" className={classes.title}>Fruits</Typography>
					<Grid container spacing={3}>
						{fruitsData.map((data,index) => (
							<Grid item xs={4} key={`fruit-data-${index}`}>
								<Product data={data} />
							</Grid>
						))}
					</Grid>
				</div>
			</Box>
		</div>
	)
}

export default Fruits;