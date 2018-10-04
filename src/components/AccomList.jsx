import React, { Component } from 'react';

import Result from './AccomResult';

class ResultsList extends Component {
  render() {
    return (
      <div>
        <Result imageUrl="https://unsplash.it/145/125/?random" className="result" />
      </div>
    );
  }
}

export default ResultsList;
