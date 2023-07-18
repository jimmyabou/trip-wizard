import React, { useContext } from 'react';
import { AttractionsContext } from '../../providers/AttractionsContext';
import UserContext from '../../providers/UserContext';
import ModalContext from '../../providers/ModalContext';

const ActivitiesListFavButton = ({ attraction_id }) => {
  const { handleFavAttraction, favAttractionIds } = useContext(AttractionsContext);
  const { user } = useContext(UserContext);
  const { handleOpenLoginModal } = useContext(ModalContext);


  const toggleFavorite = (attraction_id, user) => {
    if (user) {
      handleFavAttraction(attraction_id);
    } else {
      handleOpenLoginModal();
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
