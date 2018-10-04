import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from '../style';

class Result extends Component {
  render() {
    const { imageUrl } = this.props;
    return (
      <div style={style.result}>
        <div style={style.resultImage}>
          <img src={imageUrl} alt="The hotel" />
        </div>

        <div style={style.resultInfo}>
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
