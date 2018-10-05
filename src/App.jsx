import React, { Component } from 'react';
import logo from './assets/logo.png';

import AccomList from './components/AccomList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="AppHeader">
          <img src={logo} className="AppLogo" alt="logo" />
        </header>
        <AccomList ref="resultsList" />
      </div>
    );
  }
}

export default App;
