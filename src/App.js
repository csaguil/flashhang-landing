import React, { Component } from 'react';
import logo from './pineapple.jpg';
import { Button, Icon } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="App">
          <img src={logo} className="App-pineapple" alt="pineapple" />
          <div class="App-header">
            <div class="App-title">
              Flash Hang is coming soon
            </div>
          </div>
          <a href="https://goo.gl/oGimnB"><Icon name="external alternate" size="big"></Icon></a>
      </div>
    );
  }
}

export default App;
