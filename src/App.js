import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Splash from './Splash';
import Home from './Home';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      drinks: [],
      eats: [],
      stays: [],
      plays: []
    };
  }

  componentDidMount() {
    const splashLoad = document.querySelector('.splash-loading');
    const enterLink = document.querySelector('.enter-link');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        splashLoad.style.display = 'none';
        enterLink.style.display = 'block';
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        
        axios.get('https://api.foursquare.com/v2/venues/search?v=20170716&ll=' + this.state.latitude + ',' + this.state.longitude + '&query=restaurant&intent=checkin&radius=16000&client_id=HOB0A1K01E0KKSPOPUFIPOWSCJTMNCQBTMEWVIEYLECNAWJT&client_secret=P1VTAKEW3CYRCTESMR0ZS1VD22RCND3TPDT1RINUC0S3SDRM')
        .then(res => {
          console.log(res.data.response.venues);
          const eats = res.data.response.venues;
          this.setState({eats});
        })
        .then(axios.get('https://api.foursquare.com/v2/venues/search?v=20170716&ll=' + this.state.latitude + ',' + this.state.longitude + '&categoryId=4bf58dd8d48988d116941735&intent=checkin&radius=10000&client_id=HOB0A1K01E0KKSPOPUFIPOWSCJTMNCQBTMEWVIEYLECNAWJT&client_secret=P1VTAKEW3CYRCTESMR0ZS1VD22RCND3TPDT1RINUC0S3SDRM')
          .then(res => {
            console.log(res.data.response.venues);
            const drinks = res.data.response.venues;
            this.setState({drinks});
        }))
        .then(axios.get('https://api.foursquare.com/v2/venues/search?v=20170716&ll=' + this.state.latitude + ',' + this.state.longitude + '&query=hotel&intent=checkin&radius=16000&client_id=HOB0A1K01E0KKSPOPUFIPOWSCJTMNCQBTMEWVIEYLECNAWJT&client_secret=P1VTAKEW3CYRCTESMR0ZS1VD22RCND3TPDT1RINUC0S3SDRM')
          .then(res => {
           console.log(res.data.response.venues);
           const stays = res.data.response.venues;
           this.setState({stays}); 
        }))
        .then(axios.get('https://api.foursquare.com/v2/venues/search?v=20170716&ll=' + this.state.latitude + ',' + this.state.longitude + '&categoryId=4d4b7104d754a06370d81259&intent=checkin&radius=16000&client_id=HOB0A1K01E0KKSPOPUFIPOWSCJTMNCQBTMEWVIEYLECNAWJT&client_secret=P1VTAKEW3CYRCTESMR0ZS1VD22RCND3TPDT1RINUC0S3SDRM')
          .then(res => {
           console.log(res.data.response.venues); 
           const plays = res.data.response.venues;
           this.setState({plays});
        }))

      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    return (
      <div className="App">
      	<Switch>
        	<Route exact path='/' component={Splash} />
          <Route path='/home' render={() => <Home eats={this.state.eats} drinks={this.state.drinks} plays={this.state.plays} stays={this.state.stays} />} />
        </Switch>
      </div>
    );
  }
}

export default App;