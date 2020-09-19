import React, { Component } from 'react';
import Listing from './Listing';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

class Eat extends Component {
  render() {
    return (
      <CSSTransitionGroup 
          className="Eat"
          transitionName="fadein"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
        	<div className="component-img eat">
        		<div className="curtain"></div>
            <h1 className="component-title">Eat</h1>
            <Link className="return-link" to='/home'>Back To Home</Link>
        	</div>
        	<div className="result-wrapper">
        		{this.props.eats.map((eat,index) =>
                <Listing key={index} result={eat} />
            )}
        	</div>
      </CSSTransitionGroup>
    );
  }
}

export default Eat;