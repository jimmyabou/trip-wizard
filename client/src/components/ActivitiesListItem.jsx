import React from 'react';

import '../styles/ActivitiesListItem.scss';


const ActivitiesListItem = (props) => {

  const {} = props

  return (
      <div className="activity-list__item">
        <button className="fav-button">
          <i className="fa-regular fa-heart"></i>
        </button>
        <img className="activity__photo" src="https://github.com/tamaratell/TripWizard-Styles/blob/master/assets/activity-image-example.jpeg?raw=true" alt="activity img" />
        <footer className="activity__details">
          <div className="activity__details-info">
            <i className="fa-solid fa-location-dot"></i>
            <h3>Paris, France</h3>
          </div>
          <div className="activity__details-info">
            <i className="fa-solid fa-thumbs-up"></i>
            <h3> 4.5 </h3>
          </div>
          {/* <!-- Add enhanced item here!! --> */}
        </footer>
      </div>


  );


};

export default ActivitiesListItem;

ActivitiesListItem.defaultProps = {

};