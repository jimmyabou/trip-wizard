import React from 'react';

import ActivitiesListItem from './ActivitiesListItem';

import attractions from '../mocks/attractions';



const ActivitiesList = () => {

  return (
    < ul className="activity-list" >
      {attractions.map(attraction => (
        <ActivitiesListItem attraction={attraction} key={attraction.attraction_id} />
      ))}
    </ul >
  );


};

export default ActivitiesList;

// ActivitiesList.defaultProps = {

// };

