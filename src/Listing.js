import React, { Component } from 'react';
import { mileMaker } from './Helper';

class Listing extends Component {
  render() {
    return (
      <div className="Listing">
        	<h3 className="listing-info">{this.props.result.name}</h3>
          	<h4 className="listing-info">{this.props.result.location.formattedAddress[0]}</h4>
            {this.props.result.contact.formattedPhone ?
                <h4 className="listing-info listing-minor border-right">T: {this.props.result.contact.formattedPhone}</h4>
                :
                null
            }
          	<h4 className="listing-info listing-minor">Distance: {Math.round(mileMaker(this.props.result.location.distance))} Miles</h4>
            <div className="icons-container">
                <div className="icon-wrapper">
                    {this.props.result.url ?
                        <a target="blank" href={this.props.result.url}>
                            <div className="icon-holder">
                                <img src={require("./img/web-icon.png")} alt="Website Icon" />
                            </div>
                            <h5 className="icon-title">WEBSITE</h5>
                        </a>
                        :
                        null
                    }
                </div>
                <div className="icon-wrapper">
                     {this.props.result.hasMenu === true ?
                        <a target="blank" href={this.props.result.menu.mobileUrl}>
                            <div className="icon-holder">
                                <img src={require("./img/menu-icon.png")} alt="Menu Icon" />
                            </div>
                            <h5 className="icon-title">MENU</h5>
                        </a>
                        :
                        null
                    }
                </div>
                <div className="icon-wrapper">
                     <a target="blank" href={`https://maps.google.com/?q=${this.props.result.location.address},${this.props.result.location.city},${this.props.result.location.state},${this.props.result.location.postalCode}`}>
                          <div className="icon-holder">
                              <img src={require("./img/location-icon.png")} alt="Location Icon" />
                          </div>
                          <h5 className="icon-title">LOCATION</h5>
                      </a>
                </div>
            </div>
      </div>
    );
  }
}

export default Listing;