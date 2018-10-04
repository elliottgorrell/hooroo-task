import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Result extends Component {
  render() {
    const { imageUrl } = this.props;
    return (
      <div className="result">
        <div className="resultImage">
          <img src={imageUrl} alt="The hotel" />
        </div>

        <div className="resultInfo">
          <span>Hey there</span>
        </div>
      </div>
    );
  }
}

Result.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default Result;
