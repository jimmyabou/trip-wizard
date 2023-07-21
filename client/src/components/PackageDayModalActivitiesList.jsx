import { useContext, useEffect, useState } from 'react';
import ActivitiesListItem from './activities-list/ActivitiesListItem.jsx'
import { Fab } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import '../styles/Package/packageDayDetails.scss'


const PackageDayModalActivitiesList = (props) => {

  const [unselectedAttractions, setUnselectedAttractions] = useState([])
  const { attractions, pageTitle, username, button, handleAddAttraction, selectedAttractions, isOpen } = props;
  const filterUnselectedAttractions = () => {
    const filteredAttractions = attractions.filter(attraction => !selectedAttractions.includes(attraction.attraction_id));
    setUnselectedAttractions(filteredAttractions);
  };

  useEffect(() => {
    filterUnselectedAttractions();
  }, [attractions, selectedAttractions, isOpen]);

  return (
    <main>
      <div className="page-title">
        <h2> {pageTitle}</h2>
        {username && <h2 className='user-greeting'> Hello, {username}. </h2>}
      </div>
      < ul className="activity-list" >
        {unselectedAttractions.map(attraction => (
          <div id="attractionListItemContainer">
            <ActivitiesListItem attraction={attraction} key={attraction.attraction_id} />
            <div id="addAttractionFabContainer">
              <Fab
                color="primary"
                aria-label="Add Attraction"
                onClick={() => handleAddAttraction(attraction.attraction_id)}
              >
                <AddIcon id="addAttractionIcon" />
              </Fab>
            </div>
          </div>


        ))}
      </ul >
    </main>
  );


};

export default PackageDayModalActivitiesList;



