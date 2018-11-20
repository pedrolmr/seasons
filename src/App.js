import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      latitude: null
    }
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      error => console.log(error)
    );
    return (
      <div className="App">
        <h1>Homepage</h1>
      </div>
    );
  }
}

export default App;
