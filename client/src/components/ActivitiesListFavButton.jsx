import React, { useState, useContext } from 'react';
import { AttractionsContext } from '../providers/AttractionsContext';

const ActivitiesListFavButton = ({ attraction_id }) => {
  const { handleFavAttraction } = useContext(AttractionsContext);
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = (attraction_id) => {
    setIsFavorited(!isFavorited);
    handleFavAttraction(attraction_id);
  };

  return (
    <button className="fav-button" onClick={() => toggleFavorite(attraction_id)}>
      <i className={`fa ${isFavorited ? 'fa-solid' : 'fa-regular'} fa-heart`}></i>
    </button>
  );
};

export default ActivitiesListFavButton;
