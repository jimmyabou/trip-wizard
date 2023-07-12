import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AttractionsContext } from '../providers/AttractionsContext';
import UserContext from '../providers/UserContext';

const ActivitiesListFavButton = ({ attraction_id }) => {
  const { handleFavAttraction, favAttractionIds } = useContext(AttractionsContext);
  const { user } = useContext(UserContext);


  const toggleFavorite = (attraction_id, user) => {
    if (user) {
      handleFavAttraction(attraction_id);
    } else {
      alert("Must be logged in to favorite attractions!");
    }
  };

  const isFav = favAttractionIds.includes(attraction_id);


  return (
    <button className="fav-button" onClick={() => toggleFavorite(attraction_id, user)}>
      <i className={`fa ${isFav ? 'fa-solid' : 'fa-regular'} fa-heart`}></i>
    </button>
  );
};

export default ActivitiesListFavButton;
