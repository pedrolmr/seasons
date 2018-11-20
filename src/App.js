import React, { Component } from 'react';
import './App.css';

import SeasonDisplay from './components/SeasonDisplay';

class App extends Component {
    state = {latitude: null, errorMessage: ''}

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({latitude: position.coords.latitude}),
      error => this.setState({errorMessage: error.message})
    );
  }

  render() {
    return (
      <div className="App">
      {!this.state.latitude ? this.state.errorMessage : <SeasonDisplay latitude={this.state.latitude}/>}
      </div>
    );
  }
}

export default App;
