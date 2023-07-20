import React from 'react';

const EnhancedActivitiesListItem = (props) => {

  const { description, price, url } = props;

  const shortenDescription = (str) => {
    const firstSentence = str.split('. ')[0];
    const maxLength = 130;
    let result = firstSentence;

    if (firstSentence.length > maxLength) {
      result = firstSentence.substring(0, maxLength);
    }

    if (result.endsWith(' ')) {
      result = result.slice(0, -1);
    }

    if (result.endsWith(',')) {
      result = result.slice(0, -1);
    }

    return result;
  };

  return (
    <div className="activity__details-more">
      <p> {shortenDescription(description)}...</p>
      <div className="activity__details-booking-info">
        <div className="activity__details-price">
          <p>from </p>
          <span>${price}</span>
          <p>per adult</p>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <button id="reserve">
            Reserve
          </button>
        </a>
      </div>
    </div >
  );


};

export default EnhancedActivitiesListItem;