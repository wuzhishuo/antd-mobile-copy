import React, { Component } from 'react';

import './App.css';
import { Demo as ButtonDemo } from './components/button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonDemo />
      </div>
    );
  }
}

export default App;
