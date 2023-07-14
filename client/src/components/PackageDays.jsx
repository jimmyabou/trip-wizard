import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';
import { TextField, Button, Card, Typography, Modal, IconButton,Accordion, AccordionSummary, AccordionDetails,Collapse , Grid } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TodayIcon from '@mui/icons-material/Today';
import { Fab } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ActivitiesListItem from './ActivitiesListItem';
import { alignProperty } from '@mui/material/styles/cssUtils';

const PackageDays = () => {
  const { packageId } = useParams();
  const [days, setDays] = useState([]);
  const [newDayTitle, setNewDayTitle] = useState('');
  const [newDayDescription, setNewDayDescription] = useState('');
  const [newDayDate, setNewDayDate] = useState(new Date());
  const [dayAdded, setDayAdded] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [attractions, setAttractions] = useState([]);
  const [selectedAttractions, setSelectedAttractions] = useState([]);
  const [fetchAttractions, setFetchAttractions] = useState(false);
  const [activeDayId, setActiveDayId] = useState(null);
  
//fetch all attractions that belong to a specific day that was clicked and populate the array that is conditional to show the - sign"

// const attractions2 = [
//   {
//     id: 1,
//     name: 'Attraction 1',
//     image: 'https://example.com/attraction1.jpg',
//     description: 'Description of Attraction 1',
//   },
//   {
//     id: 2,
//     name: 'Attraction 2',
//     image: 'https://example.com/attraction2.jpg',
//     description: 'Description of Attraction 2',
//   },
//   {
//     id: 3,
//     name: 'Attraction 3',
//     image: 'https://example.com/attraction3.jpg',
//     description: 'Description of Attraction 3',
//   },
// ];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  ////////////////////////////////////////////////////


  useEffect(() => {
    const fetchDays = async () => {
      try {
        const response = await axios.get(`/getdays/${packageId}`);
        setDays(response.data.days);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDays();
    setDayAdded(false);
  }, [dayAdded]);

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const response = await axios.get('/attractions');
        setAttractions(response.data.attractions);
        setFetchAttractions(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAttractions();
  }, [fetchAttractions]);

  const handleAddDay = async (event) => {
    event.preventDefault();
    try {
      const newDay = {
        title: newDayTitle,
        description: newDayDescription,
        date: newDayDate,
        attractions: selectedAttractions, // Pass the selected attractions to the backend
      };
      await axios.post(`/addDay/${packageId}`, newDay);
      setDayAdded(true);
      setNewDayTitle('');
      setNewDayDescription('');
      setNewDayDate(new Date());
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  const handleDeleteDay = async (dayId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this day?');
    if (confirmDelete) {
      try {
        await axios.delete(`/deleteDay/${dayId}`);
        setDayAdded(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleOpenModal = (dayid) => {
    setSelectedAttractions([]);
    setFetchAttractions(true);
    setIsOpen(true);
    console.log(dayid)
    setActiveDayId(dayid);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleAddAttraction = (attractionId) => {
    setSelectedAttractions((prevSelectedAttractions) => [...prevSelectedAttractions, attractionId]);
  
  };

  const handleRemoveAttraction = (attractionId) => {
    setSelectedAttractions((prevSelectedAttractions) =>
      prevSelectedAttractions.filter((id) => id !== attractionId)
    );
  };

  const handleSaveAttractions = async () => {
    console.log(selectedAttractions, activeDayId);
    handleCloseModal();
  
    try {
      await axios.post(`/insertAttractionsByDay/${activeDayId}`, { attractions: selectedAttractions });
      setSelectedAttractions([]);
      console.log('successfully apdated attraction list for this day')
    } catch (error) {
      console.error(error);
    }
  };

  const renderDays = () => {
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
                  {day.date.substring(0, 10)} <TodayIcon />
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
          <div style={{ padding: '10px',display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {attractions && (
              <div
                style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
                onClick={handleExpand}
              >
                
                  {expanded ? (
                    <KeyboardDoubleArrowDownIcon style={{ fontSize: '40px', transform: 'rotate(180deg)', color: '#9e9e9e'  }} />
                  ) : (
                    <KeyboardDoubleArrowDownIcon style={{ fontSize: '40px', color: '#9e9e9e' }} />
                  )}
                
              </div>
            )}
            {/* <div><Typography variant="h6">Attractions:</Typography></div> */}
            {attractions.slice(0, expanded ? attractions.length : 0).map((attraction) => (
              <Card key={attraction.id} style={{width: '60%', marginBottom: '10px'}}
              >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', margin: '20px'  }} 
                
                
              >
                <img
                  src={attraction.pictures[0]}
                  alt={attraction.name}
                  style={{ width: '10vh', height: '10vh', borderRadius: '50%', marginRight: '10px' }}
                />
                <div>
                <Typography variant='h6'>{attraction.name}</Typography>
                <Typography>${attraction.price}</Typography>
                <Typography>{attraction.duration/60} hours</Typography>
                </div>
              </div>
              </Card>
            ))}
          </div>
        </Card>
      ));
  };
  






  return (
    <>
      <form onSubmit={handleAddDay} style={{ marginTop: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Title"
            variant="outlined"
            style={{ marginRight: '10px', marginLeft: '20px' }}
            value={newDayTitle}
            onChange={(event) => setNewDayTitle(event.target.value)}
          />
          <TextField
            label="Description"
            variant="outlined"
            style={{ marginRight: '10px' }}
            value={newDayDescription}
            onChange={(event) => setNewDayDescription(event.target.value)}
          />
          <div style={{ position: 'relative' }}>
            <CalendarTodayIcon
              style={{ position: 'absolute', top: '50%', right: '8px', transform: 'translateY(-50%)', cursor: 'pointer' }}
              onClick={toggleDatePicker}
            />
            <TextField
              style={{ cursor: 'pointer' }}
              value={newDayDate.toLocaleDateString()}
              onClick={toggleDatePicker}
            />
            {isDatePickerOpen && (
              <div style={{ position: 'absolute', zIndex: '9999' }}>
                <DatePicker
                  inline
                  selected={newDayDate}
                  onChange={(date) => {
                    setNewDayDate(date);
                    toggleDatePicker();
                  }}
                />
              </div>
            )}
          </div>
          <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '20px', background: '#51D4BF', borderRadius: 20, height: '50px' }}>
            Add
          </Button>
        </div>
      </form>
      <div style={{ margin: '20px' }}>{renderDays()}</div>
      <Modal open={isOpen} onClose={handleCloseModal}>
        <Card
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            backgroundColor: 'white',
            padding: '16px',
            borderRadius: '8px',
            maxHeight: '90vh',
            maxWidth: '130vw',
            overflowY: 'auto',

          }}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton aria-label="close" onClick={handleCloseModal}>
              <CloseIcon />
            </IconButton>
          </div>
          <Typography variant="h5">Attractions</Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {attractions.map((attraction) => (
              <Card
                key={attraction.id}
                style={{
                  width: '40vh',
                  margin: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px',
                  borderRadius: '8px',
        
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div style={{ maxHeight: '300px', overflow: 'auto' }}>
                  <img
                    src={attraction.pictures[0]}
                    alt="Attraction"
                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', paddingRight: '16px' }}>
                    <div>
                      <Typography variant="h6">{attraction.country}</Typography>
                      <Typography variant="subtitle1">{attraction.city}</Typography>
                    </div>
                    <div>
                      <Typography variant="h6">Price: ${attraction.price}</Typography>
                      <Typography>Duration: {attraction.duration / 60}hours</Typography>
                    </div>
                  </div>
                  <Typography>{attraction.description}</Typography>

                </div>
                {!selectedAttractions.includes(attraction.attraction_id) && 
                <div style={{  marginTop: 'auto',
                paddingTop: '10px'
              }}>
                <Fab
                color="primary"
                aria-label="Add Attraction"
                onClick={() => handleAddAttraction(attraction.attraction_id)}
                style={{
                  backgroundColor: '#51D4BF',
                  width: '35px',
                  height: '30px'}}
              >
                <AddIcon style={{ fontSize: '32px' }} />
              </Fab></div>
              }
                {/* <IconButton
                  aria-label="Add attraction"
                  onClick={() => handleAddAttraction(attraction.attraction_id)}
                  style={{ marginTop: 'auto' }}
                >
                  <AddIcon />
                </IconButton> */}
                {selectedAttractions.includes(attraction.attraction_id) && (

                  <DeleteIcon
                  style={{ color: 'grey', cursor: 'pointer', marginLeft: '10px', fontSize: '40px',marginTop: 'auto' ,paddingTop: '10px'}}
                  onClick={() => handleRemoveAttraction(attraction.attraction_id)}
                  />
                  // <IconButton
                  //   aria-label="Remove attraction"
                  //   onClick={() => handleRemoveAttraction(attraction.attraction_id)}
                  // >
                  //   <RemoveIcon />
                  // </IconButton>
                )}
              </Card>
            ))}
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveAttractions}
            style={{
              
              position: 'sticky',
              bottom: '10px',
              left: '2000px',
              borderRadius: '10%',
              width: '100px',
              height: '50px',
              zIndex: '999',
              background: '#51D4BF',
            }} >
            Save
          </Button>
        </Card>
      </Modal>



    </>
  );
};

export default PackageDays;


