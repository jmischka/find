import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Choose from './Choose';
import Eat from './Eat';
import Drink from './Drink';
import Play from './Play'
import Stay from './Stay';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        	<Header />
        	<Switch>
	        	<Route exact path='/home' component={Choose} />
	        	<Route path='/home/eat' render={() => <Eat eats={this.props.eats} />} />
	        	<Route path='/home/drink' render={() => <Drink drinks={this.props.drinks} />} />
            <Route path='/home/play' render={() => <Play plays={this.props.plays} />} />
	        	<Route path='/home/stay' render={() => <Stay stays={this.props.stays} />} />
	        </Switch>
      </div>
    );
  }
}

export default Home;