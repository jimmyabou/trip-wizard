import React from 'react';

import ActivitiesListItem from './ActivitiesListItem';


const ActivitiesList = (props) => {

  const { attractions, pageTitle } = props;


  return (
    <main>
      <div className="page-title">
        <h2> {pageTitle}</h2>
      </div>
      < ul className="activity-list" >
        {attractions.map(attraction => (
          <ActivitiesListItem attraction={attraction} key={attraction.attraction_id} />
        ))}
      </ul >
    </main>
  );


};

export default ActivitiesList;