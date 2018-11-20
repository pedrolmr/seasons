import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      latitude: null,
      errorMessage: ''
    }
  }

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({latitude: position.coords.latitude})
      },
      error => {
        this.setState({errorMessage: error.message})
      }
    );
  }

  render() {
    return (
      <div className="App">
      {!this.state.latitude ? this.state.errorMessage : this.state.latitude}
      </div>
    );
  }
}

export default App;
