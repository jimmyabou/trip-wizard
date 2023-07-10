import React from 'react';

import EnhancedActivitiesListItem from './EnhancedActivitiesListItem';
import ActivitiesListFavButton from './ActivitiesListFavButton';

const ActivitiesListItem = (props) => {

  const { attraction } = props;

  return (
    <li>
      < div className="activity-list__item" key={attraction.attraction_id} >
        <ActivitiesListFavButton />
        <img className="activity__photo" src={attraction.pictures[0]} alt="activity img" />
        <footer>
          <div className="activity__details">
            <div className="activity__details-info">
              <i className="fa-solid fa-location-dot"></i>
              <h3>{attraction.city}, {attraction.country}</h3>
            </div>
            <div className="activity__details-info">
              <i className="fa-solid fa-thumbs-up"></i>
              <h3> {attraction.rating} </h3>
            </div>
          </div>
          <EnhancedActivitiesListItem description={attraction.description} price={attraction.price} />
        </footer>
      </div >
    </li>
  );


};

export default ActivitiesListItem;

ActivitiesListItem.defaultProps = {

};