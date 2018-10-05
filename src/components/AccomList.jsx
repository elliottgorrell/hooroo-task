import React, { Component } from 'react';

import Result from './AccomResult';

import dummyData from '../assets/dummyData';

class AccomList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      results: dummyData,
      sortingOrder: 'default'
    };
  }
  
  sortByHigh = (list) => {
    return list.sort((a, b) => a.price - b.price);
  }
  sortByLow = (list) => {
    return list.sort((a, b) => b.price - a.price);
  } 

  onSort = (event) => {
    const currentList = this.state.results;
    this.setState({sortingOrder: event.target.value});
    if(this.state.sortingOrder === 'low') this.setState({results: this.sortByLow(currentList)});
    else this.setState({results: this.sortByHigh(currentList)});
  }

  render() {
    const { results: hotels } = this.state;

    return (
      <div>
        <div className="topPane">
          <p><b>5</b> Hotels in <b>Sydney</b></p>
          <div>
            <select className="sortSelector" style={{ float: 'right', width: '100px' }} onChange={this.onSort} value={this.state.sortingOrder}>
              <option disabled selected value value="default"> -- Sort By Price -- </option>
              <option value="low">low-high</option>
              <option value="high">high-low</option>
            </select>
          </div>
        </div>
        {hotels.map(hotel => <Result key={hotel.id} {...hotel} className="result" />)}
      </div>
    );
  }
}

export default AccomList;
