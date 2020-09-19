import React, { Component } from 'react';
import Listing from './Listing';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

class Play extends Component {
  render() {
    return (
      <CSSTransitionGroup 
          className="Play"
          transitionName="fadein"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
        	<div className="component-img play">
        		<div className="curtain"></div>
            <h1 className="component-title">Play</h1>
            <Link className="return-link" to='/home'>Back To Home</Link>
        	</div>
        	<div className="result-wrapper">
        		{this.props.plays.map((play,index) =>
                <Listing key={index} result={play} />
            )}
        	</div>
      </CSSTransitionGroup>
    );
  }
}

export default Play;