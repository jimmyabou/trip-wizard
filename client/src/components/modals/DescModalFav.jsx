import React, { useContext } from 'react';
import { AttractionsContext } from '../../providers/AttractionsContext';
import UserContext from '../../providers/UserContext';
import ModalContext from '../../providers/ModalContext';

const ActivitiesListFavButton = ({ attraction_id }) => {
  const { handleFavAttraction, favAttractionIds } = useContext(AttractionsContext);
  const { user } = useContext(UserContext);


  const toggleFavorite = (attraction_id, user) => {
    if (user) {
      handleFavAttraction(attraction_id);
    }
  };

  const isFav = favAttractionIds.includes(attraction_id);


  return (
    user && (
      <button className="fav-button" onClick={() => toggleFavorite(attraction_id, user)} style={{ top: "2.8rem", right: "2.6rem" }}>
        <i className={`fa ${isFav ? 'fa-solid' : 'fa-regular'} fa-heart`}></i>
      </button>
    ));
};

export default ActivitiesListFavButton;
