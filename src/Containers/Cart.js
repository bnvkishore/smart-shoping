import React from 'react';
import { connect } from "react-redux";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import CartItem from '../Components/CartItem';

const useStyles = makeStyles(theme => ({
	breadcrumbColor: {
		color: theme.palette.primary.main
	},
}));
function Cart(props) {
	const { actionCreated } = props;
	const history = useHistory();
	const classes = useStyles()
	const handleClick = () => {
		history.push('/');
	}
	return(
		<div>
			<Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbColor}>
				<Link color="inherit" onClick={handleClick}>
					Home
				</Link>
				<Typography >Cart</Typography>
			</Breadcrumbs>
			{actionCreated && actionCreated.map((data,index) => (
				<CartItem data={data} />
			))}
		</div>
	)
}

const mapStateToProps = state => {
  return {
    status: state.cart.status,
    actionCreated: state.cart.newAction
  };
};

export default connect(
  mapStateToProps,
  null // Generaly its the place of mapStateToDispatch
)(Cart);

