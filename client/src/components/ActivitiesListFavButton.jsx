import React, { useState } from 'react';

const ActivitiesListFavButton = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <button className="fav-button" onClick={toggleFavorite}>
      <i className={`fa ${isFavorited ? 'fa-solid' : 'fa-regular'} fa-heart`}></i>
    </button>
  );
};

export default ActivitiesListFavButton;
