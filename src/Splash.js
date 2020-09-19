import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';


class Splash extends Component {
  render() {
    return (
      <div className="Splash">

          <CSSTransitionGroup 
          className="title-wrapper"
          transitionName="fadein"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
      		    <h1 className="title">EatDrink<br />Play&Stay</h1>
              <h3 className="tagline">Providing The Bare Essentials for a Good Time</h3>
              <div className="link-wrapper">
                  <h4 className="loading-text splash-loading">Give Us A Moment To Find You...</h4>
                  <Link className="enter-link" to='/home'>ENTER</Link>
              </div>
          </CSSTransitionGroup>

      </div>
    );
  }
}

export default Splash;
