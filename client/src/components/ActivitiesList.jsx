import React from 'react';

import ActivitiesListItem from './ActivitiesListItem';


const ActivitiesList = (props) => {

  const { attractions } = props;


  return (
    < ul className="activity-list" >
      {attractions.map(attraction => (
        <ActivitiesListItem attraction={attraction} key={attraction.attraction_id} />
      ))}
    </ul >
  );


};

export default ActivitiesList;