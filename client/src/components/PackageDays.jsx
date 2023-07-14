import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';
import { TextField, Button, Card, Typography, Modal, IconButton } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TodayIcon from '@mui/icons-material/Today';
import { Fab } from '@mui/material';
import ActivitiesListItem from './ActivitiesListItem';

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
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
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
              onClick={()=>handleOpenModal(day.day_id)}
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
        </Card>
      ));
  }



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
            overflowY: 'auto',

          }}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton aria-label="close" onClick={handleCloseModal}>
              <CloseIcon />
            </IconButton>
          </div>
          <Typography variant="h5">Attractions</Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {attractions.map((attraction) => (
              <Card
                key={attraction.id}
                style={{
                  width: '30%',
                  marginBottom: '20px',
                  display: 'flex',
                  flexDirection: 'column',
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
                <IconButton
                  aria-label="Add attraction"
                  onClick={() => handleAddAttraction(attraction.attraction_id)}
                  style={{ marginTop: 'auto' }}
                >
                  <AddIcon />
                </IconButton>
                {selectedAttractions.includes(attraction.attraction_id) && (
                  <IconButton
                    aria-label="Remove attraction"
                    onClick={() => handleRemoveAttraction(attraction.attraction_id)}
                  >
                    <RemoveIcon />
                  </IconButton>
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
              left: '90vh',
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


