import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Containers/Home';
import Vegetables from './Containers/Vegetables';
import Fruits from './Containers/Fruits';
import Households from './Containers/Households';
import Cart from './Containers/Cart';

export default function Routes() {
	return (
		<Switch>
      <Route path='/' exact component={Home} />
			<Route path='/vegetables' component={Vegetables} />
			<Route path='/fruits' component={Fruits} />
			<Route path='/households' component={Households} />
			<Route path='/cart' component={Cart} />
    </Switch>
	)
}