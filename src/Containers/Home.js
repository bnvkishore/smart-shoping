import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import ProductCategory from '../Components/ProductCategory';
import PageLogo from '../Components/PageLogo';
import { DEALS_DATA, PRODUCTS_DATA} from '../constants';

const useStyles = makeStyles((theme) => ({
	container: {
		padding: theme.spacing(0, 5)
	},
	dealWrapper: {
		marginBottom: theme.spacing(4)
	},
	title: {
		margin: theme.spacing(0,0,4),
		color: theme.palette.primary.main,
		fontWeight: 'bold'
	},
	breadcrumbColor: {
		color: theme.palette.primary.main
	}
}));

const dealsData= DEALS_DATA;

const productsData= PRODUCTS_DATA;
function Home() {
	const classes =  useStyles()
	return (
		<div>
			<Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbColor}>
				<Typography >Home</Typography>
			</Breadcrumbs>
			<PageLogo />
			<Box className={classes.container}>
				<div className={classes.dealWrapper}>
					<Typography variant="h5" className={classes.title}>Welcome to Smart Shopping Mart</Typography>
					<Grid container spacing={3}>
						{dealsData.map((deal,index) => (
							<Grid item xs={4} key={`deal-${index}`}>
								<ProductCategory data={deal} />
							</Grid>
						))}
					</Grid>
				</div>
				<div>
					<Typography variant="h5" className={classes.title}>Featured Product Categories</Typography>
					<Grid container spacing={3}>
						{productsData.map((data,index) => (
							<Grid item xs={4} key={`category-${index}`}>
								<ProductCategory data={data} />
							</Grid>
						))}
					</Grid>
				</div>
			</Box>
		</div>
	)
}

export default Home