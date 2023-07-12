import React from 'react';
import { useLocation } from 'react-router-dom';

import EnhancedActivitiesListItem from './EnhancedActivitiesListItem';
import ActivitiesListFavButton from './ActivitiesListFavButton';

const ActivitiesListItem = (props) => {

  const { attraction } = props;
  const location = useLocation();

  return (
    <li>
      < div className="activity-list__item" key={attraction.attraction_id} >
        <ActivitiesListFavButton attraction_id={attraction.attraction_id} />
        <img className="activity__photo" src={attraction.pictures[0]}
          alt="activity img"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "https://github.com/tamaratell/TripWizard-Styles/blob/master/assets/activity-image-example.jpeg?raw=true";
          }}
        />
        <footer>
          <div className="activity__details">
            <div className="activity__details-info">
              <i className="fa-solid fa-location-dot"></i>
              <h3>{attraction.city}, {attraction.country}</h3>
            </div>
            <div className='activity__details-right'>
              <div className="activity__details-info">
                <i className="fa-solid fa-thumbs-up"></i>
                <h3> {attraction.rating} </h3>
              </div>
              <div className="activity__details-info">
                <i class="fa-solid fa-comment-dollar"></i>
                <h3> {attraction.price} </h3>
              </div>
            </div>

          </div>
          {location.pathname.includes('favorites') && <EnhancedActivitiesListItem description={attraction.description} price={attraction.price} />}
        </footer>
      </div >
    </li>
  );


};

export default ActivitiesListItem;

ActivitiesListItem.defaultProps = {

};