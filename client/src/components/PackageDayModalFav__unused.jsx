import React, { useContext, useEffect, useState } from 'react';
import ActivitiesListItem from './ActivitiesListItem';
import { Fab } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";

const PackageDayModalFav = (props) => {
  const[unselectedAttractions,setUnselectedAttractions]=useState([])
  const { attractions, pageTitle, username, button, handleAddAttraction,selectedAttractions,isOpen } = props;
  const filterUnselectedAttractions = () => {
    const filteredAttractions = attractions.filter(attraction => !selectedAttractions.includes(attraction.attraction_id));
    setUnselectedAttractions(filteredAttractions);
  };

  useEffect(() => {
    filterUnselectedAttractions();
  }, [attractions, selectedAttractions,isOpen]);

  return (
    <main>
      <div className="page-title">
        <h2>{pageTitle}</h2>
        {username && <h2 className='user-greeting'>Hello, {username}.</h2>}
      </div>
      <ul className="activity-list">
        {unselectedAttractions.map((attraction) => (
          
          <li key={attraction.attraction_id}>
            <div style={{ position: 'relative' }}>
              <ActivitiesListItem attraction={attraction} />
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  opacity: 0.5,
                }}
              >
                <Fab
                  color="primary"
                  aria-label="Add Attraction"
                  onClick={() => handleAddAttraction(attraction.attraction_id)}
                  style={{
                    backgroundColor: "white",
                    width: "50px",
                    height: "50px",
                    
                    ':hover': {
                      backgroundColor: "#51D4BF",
                    },
                  }}
                >
                  <AddIcon style={{ fontSize: "32px", color: 'black' }} />
                </Fab>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};


export default PackageDayModalFav;
