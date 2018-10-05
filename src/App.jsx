import React, { Component } from 'react';
import logo from './assets/logo.png';

import AccomList from './components/AccomList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="AppHeader">
          <img src={logo} className="AppLogo" alt="logo" />
          <p style={{ gridRow: '2' }}><b>5</b> Hotels in <b>Sydney</b></p>
          <div style={{ gridRow: '2'}}>
            <select style={{ float: 'right', width: '100px' }}>
              <option value="low">low-high</option>
              <option value="high">high-low</option>
            </select>
          </div>
        </header>
        <AccomList />
      </div>
    );
  }
}

export default App;
