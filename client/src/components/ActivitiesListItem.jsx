import React from 'react';
import attractions from '../mocks/attractions';

const ActivitiesListItem = (props) => {

  const { } = props;

  const attraction = attractions[0];

  return (
    < div className="activity-list__item" key={attraction.attraction_id} >
      <button className="fav-button">
        <i className="fa-regular fa-heart"></i>
      </button>
      <img className="activity__photo" src={attraction.pictures[0]} alt="activity img" />
      <footer className="activity__details">
        <div className="activity__details-info">
          <i className="fa-solid fa-location-dot"></i>
          <h3>{attraction.city}, {attraction.country}</h3>
        </div>
        <div className="activity__details-info">
          <i className="fa-solid fa-thumbs-up"></i>
          <h3> {attraction.rating} </h3>
        </div>
        {/* <!-- Add enhanced item here!! --> */}
      </footer>
    </div >


  );


};

export default ActivitiesListItem;

ActivitiesListItem.defaultProps = {

};