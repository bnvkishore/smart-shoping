import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
	root: {
		margin: theme.spacing(2,0)
	},
	image: {
		width: '80%',
		height: '12rem'
	}
}));

function CartItem(props) {
	const classes = useStyles();
	const { data } = props;
	return (
		<div>
			<Card className={classes.root}>
				{/* <CardActionArea> */}
					<CardContent>
						<Grid container>
							<Grid item xs={3} >
								<div>
									<img src={data.image} alt='image' className={classes.image} />
								</div>
							</Grid>
							<Grid item xs={6}>
								<Typography gutterBottom variant="h6" >
									{data.name}
								</Typography>
								<Typography gutterBottom variant="body1" >
									{data.units}
								</Typography>
							</Grid>
							<Grid item xs={3} >
								<Typography gutterBottom variant="h6">
									{data.price}
								</Typography>				
							</Grid>
						</Grid>
					</CardContent>
				{/* </CardActionArea> */}
			</Card>
		</div>
	)
}

CartItem.propTypes = {
  data: PropTypes.shape({
		image: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    units: PropTypes.string.isRequired
	})
};
CartItem.defaultProps = {
  data: {}
}

export default CartItem;