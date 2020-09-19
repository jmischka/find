import React, { Component } from 'react';
import Listing from './Listing';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

class Stay extends Component {
  render() {
    return (
      <CSSTransitionGroup 
          className="Stay"
          transitionName="fadein"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
        	<div className="component-img stay">
        		<div className="curtain"></div>
            <h1 className="component-title">Stay</h1>
            <Link className="return-link" to='/home'>Back To Home</Link>
        	</div>
        	<div className="result-wrapper">
        		{this.props.stays.map((stay,index) =>
                <Listing key={index} result={stay} />
            )}
        	</div>
      </CSSTransitionGroup>
    );
  }
}

export default Stay;