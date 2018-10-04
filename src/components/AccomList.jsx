import React, { Component } from 'react';

import Result from './AccomResult';

import dummyData from '../assets/dummyData';

class AccomList extends Component {
  constructor(props) {
    super(props);
    this.state = { results: dummyData };
  }

  render() {
    return (
      <div>
        <Result imageUrl="https://unsplash.it/145/125/?random" className="result" />
      </div>
    );
  }
}

export default AccomList;
