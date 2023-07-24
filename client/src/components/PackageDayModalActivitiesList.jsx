import { useContext, useEffect, useState } from 'react';
import ActivitiesListItem from './activities-list/ActivitiesListItem.jsx'
import { Fab } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import '../styles/Package/packageDayDetails.scss'


const PackageDayModalActivitiesList = (props) => {
  // State to store remainig attractions to show in the modal for the user to add to a day
  const [unselectedAttractions, setUnselectedAttractions] = useState([]);

  const { attractions, pageTitle, username, handleAddAttraction, selectedAttractions, isOpen } = props;

  // Function to filter unselected attractions from the list of all attractions and display them in the Modal
  const filterUnselectedAttractions = () => {
    const filteredAttractions = attractions.filter(attraction => !selectedAttractions.includes(attraction.attraction_id));
    setUnselectedAttractions(filteredAttractions);
  };

  // useEffect to refresh the list of attractions in Modal everytime a user adds an attraction to any day
  useEffect(() => {
    filterUnselectedAttractions();
  }, [selectedAttractions]);

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



