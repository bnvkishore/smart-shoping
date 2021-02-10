import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { createCartLocaly, statusUnset } from "../redux/cart/action";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
	root: {
    minWidth: 345,
  },
  media: {
    height: 240,
	},
	contentBackground: {
		backgroundColor: '#d2a95f29'
	},
	actions: {
		backgroundColor: '#efefef',
		display: 'flex',
		justifyContent: 'center'
	}
}))
function Product(props) {
	const classes = useStyles();
	const { data, dispatch, status } = props;

	const handleAddCart = (obj) => {
		dispatch(createCartLocaly(obj))
	}
	React.useEffect(() => {
    switch (status) {
      case "ERROR":
        console.log("ERROR");
        dispatch(statusUnset());
        break;
      case "PENDING":
        dispatch(statusUnset());
        break;
      default:
        break;
    }
	}, [status]);
	
	return (
		<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.image}
          title=""
        />
        <CardContent className={classes.contentBackground}>
          <Typography gutterBottom variant="body1" >
            {data.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.name}
          </Typography>
					<Typography variant="caption" color="textSecondary" component="p">
            {data.units}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
				<Button color="primary" fullWidth onClick={()=>handleAddCart(data)}>
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
	)
}

Product.propTypes = {
  data: PropTypes.shape({
		image: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    units: PropTypes.string.isRequired
	})
};
Product.defaultProps = {
  data: {}
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
)(Product);
