import React, { Component } from 'react';
import logo from './assets/logo.png';

import AccomList from './components/AccomList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <AccomList />
      </div>
    );
  }
}

export default App;
