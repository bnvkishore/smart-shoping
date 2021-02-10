import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 345,
  },
  media: {
    height: 240,
	},
	cardContent: {
		backgroundColor: '#54c1e22b'
	},
	dealTitle: {
		color: theme.palette.primary.main,
		fontWeight: 'bold'
	}
}));

function ProductCategory(props) {
	const { data } = props;
	const classes = useStyles();
	const history = useHistory();

	const handleClick = () => {
		history.push(`/${data.type}`)
	}
	return(
		<Card className={classes.root}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={classes.media}
          image={data.image}
          title=""
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h6" className={classes.dealTitle}>
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
	)
}

ProductCategory.propTypes = {
  data: PropTypes.shape({
		image: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired
	})
};
ProductCategory.defaultProps = {
  data: {}
}
export default ProductCategory;