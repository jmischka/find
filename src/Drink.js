import React, { Component } from 'react';
import Listing from './Listing';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

class Drink extends Component {
  render() {
    return (
      <CSSTransitionGroup 
          className="Drink"
          transitionName="fadein"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
        	<div className="component-img drink">
        		<div className="curtain"></div>
            <h1 className="component-title">Drink</h1>
            <Link className="return-link" to='/home'>Back To Home</Link>
        	</div>
        	<div className="result-wrapper">
        		{this.props.drinks.map((drink,index) =>
                <Listing key={index} result={drink} />
            )}
        	</div>
      </CSSTransitionGroup>
    );
  }
}

export default Drink;