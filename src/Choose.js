import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';


class Choose extends Component {
  render() {
    return (
      <CSSTransitionGroup 
          className="Choose"
          transitionName="fadein"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
        	<div className="linkimg eat">
        		<div className="curtain"></div>
        		<div className="choose-link-wrapper">
                    <h4 className="choose-link-header">A BISTRO TO SATISFY YOUR HUNGER</h4>
        			<Link className="choose-link" to='/home/eat'>FIND ME FOOD</Link>
        		</div>
        	</div>
        	<div className="linkimg drink">
        		<div className="curtain"></div>
        		<div className="choose-link-wrapper">
                    <h4 className="choose-link-header">A TAVERN TO QUENCH YOUR THIRST</h4>
        			<Link className="choose-link" to='/home/drink'>FIND ME DRINKS</Link>
        		</div>
        	</div>
          <div className="linkimg play">
            <div className="curtain"></div>
            <div className="choose-link-wrapper">
                    <h4 className="choose-link-header">ALL DRESSED UP, NOWHERE TO GO</h4>
              <Link className="choose-link" to='/home/play'>FIND ME FUN</Link>
            </div>
          </div>
        	<div className="linkimg stay">
        		<div className="curtain"></div>
        		<div className="choose-link-wrapper">
                    <h4 className="choose-link-header">LODGING TO LAY YOUR HEAD</h4>
        			<Link className="choose-link" to='/home/stay'>FIND A PLACE TO STAY</Link>
        		</div>
        	</div>
      </CSSTransitionGroup>
    );
  }
}

export default Choose;