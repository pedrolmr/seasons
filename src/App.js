import React, { Component } from 'react';
import './App.css';

import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';

class App extends Component {
    state = {latitude: null, errorMessage: ''}

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({latitude: position.coords.latitude}),
      error => this.setState({errorMessage: error.message})
    );
  }

  render() {
    if(this.state.errorMessage && !this.state.latitude){
      return <div>Error: {this.state.errorMessage}</div>
    }
    if(!this.state.errorMessage && this.state.latitude){
      return <SeasonDisplay latitude={this.state.latitude} />
    }else{
      return <Spinner message='Accept location request'/>
    }
  }
}

export default App;
