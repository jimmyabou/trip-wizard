import React from 'react';
import { Card, Typography, Fab, IconButton } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react';


const PackageDayAttractionsList = ({
  days,
  attractions,
  selectedAttractions,
  handleOpenModal,
  handleDeleteDay,
  handleAddAttraction,
  handleRemoveAttraction,
}) => {
  const [expanded, setExpanded] = useState(false);


  const openAttractiosByDay = (day) => {
    setExpanded (true) ;
  };

  days.forEach((day) => {
    day.expanded = false;
  });

  return days
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((day, index) => (
      <Card
        key={day.day_id}
        style={{
          marginBottom: '10px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5">
              Day {index + 1}{' '}
              <Typography variant="h6" component="span">
                {day.date.substring(0, 10)} <CalendarTodayIcon style={{ color: 'grey' }} />
              </Typography>
            </Typography>
            <Typography variant="h6"> {day.day_title}</Typography>
            <Typography>{day.day_description}</Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Fab
              color="primary"
              aria-label="Add Attraction"
              onClick={() => handleOpenModal(day.day_id)}
              style={{
                backgroundColor: '#51D4BF',
                width: '56px',
                height: '56px',
              }}
            >
              <AddIcon style={{ fontSize: '32px' }} />
            </Fab>
            <DeleteIcon
              style={{ color: 'grey', cursor: 'pointer', marginLeft: '10px', fontSize: '40px' }}
              onClick={() => handleDeleteDay(day.day_id)}
            />
          </div>
        </div>
        <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {attractions && (
            <div
              style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
              onClick={() => {
                openAttractiosByDay(day);
              }}
            >
              {expanded ? (
                <KeyboardDoubleArrowDownIcon style={{ fontSize: '40px', transform: 'rotate(180deg)', color: '#9e9e9e' }} />
              ) : (
                <KeyboardDoubleArrowDownIcon style={{ fontSize: '40px', color: '#9e9e9e' }} />
              )}
            </div>
          )}
          {attractions.slice(0, expanded ? attractions.length : 0).map((attraction) => (
            <Card key={attraction.id} style={{ width: '60%', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', margin: '20px' }}>
                  <img
                    src={attraction.pictures[0]}
                    alt={attraction.name}
                    style={{ width: '10vh', height: '10vh', borderRadius: '50%', marginRight: '10px' }}
                  />
                  <div>
                    <Typography variant="h6">{attraction.name}</Typography>
                    <Typography>${attraction.price}</Typography>
                    <Typography>{attraction.duration / 60} hours</Typography>
                  </div>
                </div>
                <div>
                  <IconButton
                    style={{
                      color: 'grey',
                      cursor: 'pointer',
                      marginLeft: '10px',
                      fontSize: '40px',
                      marginTop: 'auto',
                      paddingTop: '10px',
                    }}
                  >
                    <DeleteIcon onClick={() => handleRemoveAttraction(attraction.attraction_id)} />
                  </IconButton>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    ));
};

export default PackageDayAttractionsList;
