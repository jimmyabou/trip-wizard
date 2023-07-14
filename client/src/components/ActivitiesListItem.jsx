import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import EnhancedActivitiesListItem from './EnhancedActivitiesListItem';
import ActivitiesListFavButton from './ActivitiesListFavButton';
import ModalContext from '../providers/ModalContext';

const ActivitiesListItem = (props) => {

  const { handleOpenDescModal } = useContext(ModalContext);

  const { attraction } = props;
  const location = useLocation();

  const abbreviateLocationName = (location) => {
    let result = location;
    if (result.includes(" ")) {
      const firstLetter = location[0];
      const spaceIndex = location.indexOf(" ");
      const secondLetter = location[spaceIndex + 1];
      result = firstLetter + secondLetter;
    }

    return result;
  };

  const toggleDescModal = (attraction_id) => {
    console.log(attraction_id);
    handleOpenDescModal(attraction_id);
  };

  return (
    <li>
      < div className="activity-list__item" key={attraction.attraction_id}>
        <ActivitiesListFavButton attraction_id={attraction.attraction_id} />
        <img className="activity__photo" src={attraction.pictures[0]}
          alt="activity img"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "https://github.com/tamaratell/TripWizard-Styles/blob/master/assets/activity-image-example.jpeg?raw=true";
          }}
          onClick={() => { toggleDescModal(attraction.attraction_id); }}
        />
        <footer>
          <div className="activity__details">
            <div className="activity__details-info">
              <i className="fa-solid fa-location-dot"></i>
              <h3>{abbreviateLocationName(attraction.city)}, {abbreviateLocationName(attraction.country)}</h3>
            </div>
            <div className='activity__details-right'>
              <div className="activity__details-info">
                <i className="fa-solid fa-thumbs-up"></i>
                <h3> {attraction.rating} </h3>
              </div>
              <div className="activity__details-info">
                <i className="fa-solid fa-comment-dollar"></i>
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