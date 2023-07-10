import React from 'react';

const EnhancedActivitiesListItem = (props) => {

  const { description, price } = props;

  const shortenDescription = (str) => {
    const index = str.indexOf('.');
    const result = str.substring(0, index);

    return result;
  };

  return (
    <div className="activity__details-more">
      <p> {shortenDescription(description)}.</p>
      <div className="activity__details-booking-info">
        <div className="activity__details-price">
          <p>from </p>
          <span>${price}</span>
          <p>per adult</p>
        </div>
        <button id="reserve">
          Reserve
        </button>
      </div>
    </div>
  );


};

export default EnhancedActivitiesListItem;