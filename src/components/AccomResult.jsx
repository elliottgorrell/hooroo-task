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
          {promotion
          && <div className="promotionBox"> {promotion} </div>
          }
        </div>

        <div className="resultInfo">
          <div className="title" style={{ display: 'grid', gridTemplateRows: 'auto auto' }}>
          <div>
            <h3 style={{ maxWidth: '50%' }}> {title} </h3>
            <div className="ratings">
              <div className={ratingType === 'star' ? 'emptyStars' : 'emptyCircles '} />
              <div className={ratingType === 'star' ? 'fullStars fullRatingIcons' : 'fullCircles fullRatingIcons'} style={{ width: `${rating * 20}%` }} />
            </div>
          </div>

            <div><p>{address}</p></div>
          </div>
          <div className="info" style={{ display: 'grid', gridTemplateColumns: '40% auto', alignItems: 'center' }}>
            <a href="#" style={{ gridColumn: '1', color: 'red' }}>{roomName}</a>
            <div style={{ gridColumn: '2', display: 'grid', gridTemplateRows: 'auto auto auto', justifyItems: 'end' }}>
              <div style={{ fontSize: '14px' }}> <b>1</b> night total (AUD) </div>
              <div style={{ fontSize: '24px'  }}><span className="dollar">{price}</span></div>
              {savings > 0
              && <div className="saving" style={{ color: 'red', fontSize: '18px' }}>Save ${savings}~</div>
              }
            </div>
          </div>

          <div>
            {freeCancellation
            && <span className="freeCancellation"  style={{ color: 'green' }}>{freeCancellation ? 'Free Cancellation' : null }</span>
            }
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
