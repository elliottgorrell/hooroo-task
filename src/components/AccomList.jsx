import React, { Component } from 'react';

import Result from './AccomResult';

import dummyData from '../assets/dummyData';

class AccomList extends Component {
  constructor(props) {
    super(props);
    this.state = { results: dummyData };
  }

  render() {
    const { results: hotels } = this.state;

    return (
      <div>
        {hotels.map(hotel => <Result key={hotel.id} imageUrl={hotel.image} className="result" />)}
      </div>
    );
  }
}

export default AccomList;
