import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Result extends Component {
  render() {
    const { id, title, address, image,
      rating, ratingType, promotion, 
      roomName, price, savings, freeCancellation } 
      = this.props;

    return (
      <div className="result">
        <div className="resultImage">
          <img src={image} alt="The hotel" />
        </div>

        <div className="resultInfo">
          <div className="title">
            <h3>{title}</h3>
            <div className="ratings">
              <div className="empty-stars" />
              <div className="full-stars" style={{ width: `${rating * 20}%` }} />
            </div>
            <div>{address}</div>
          </div>
          <div className="info" style={{ display: 'grid', gridTemplateColumns: '100px auto', alignItems: 'center' }}>
            <a href="#" style={{ gridColumn: '1' }}>{roomName}</a>
            <div style={{ gridColumn: '2', display: 'grid', gridTemplateRows: 'auto auto auto', justifyItems: 'end' }}>
              <div style={{ gridRow: '1' }}> <b>1</b> night total (AUD) </div>
              <div style={{ gridRow: '2' }}>${price}</div>
              <div style={{ gridRow: '3' }}>Save ${savings}~</div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

Result.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  ratingType: PropTypes.string.isRequired,
  promotion: PropTypes.string.isRequired,
  roomName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  savings: PropTypes.number.isRequired,
  freeCancellation: PropTypes.bool.isRequired,
};

export default Result;
