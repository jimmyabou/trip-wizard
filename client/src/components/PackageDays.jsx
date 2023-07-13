import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';
import { TextField, Button, Typography, Modal, IconButton, Card } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
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
        attractions: selectedAttractions,
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
    try {
      await axios.delete(`/deleteDay/${dayId}`);
      setDayAdded(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenModal = () => {
    setFetchAttractions(true);
    setIsOpen(true);
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

  const handleSaveAttractions = () => {
    console.log(selectedAttractions);
    handleCloseModal();
  };

  const renderDays = () => {
    return days
      .sort((a, b) => a.date.localeCompare(b.date))
      .map((day, index) => (
        <Card key={day.day_id} style={{ width: 300, margin: 12 }}>
          <div style={{ padding: '16px' }}>
            <Typography variant="h5">Day {index + 1}: {day.day_title}</Typography>
            <Typography>{day.day_description}</Typography>
            <Typography>Date: {day.date.substring(0, 10)}</Typography>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}>
            <Button variant="contained" color="primary" style={{ margin: 8, background: "#51D4BF", borderRadius: 20, maxHeight: 30 }} onClick={handleOpenModal}>
              Add 
            </Button>
            <IconButton onClick={() => handleDeleteDay(day.day_id)} style={{ color: 'grey' }}>
              <DeleteIcon />
            </IconButton>
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
          <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '20px',background: "#51D4BF", borderRadius: 20 }}>Add</Button>
        </div>
      </form>
      <div style={{ margin: '20px' }}>{renderDays()}</div>
      <Modal open={isOpen} onClose={handleCloseModal}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '16px', borderRadius: '8px', maxHeight: '90vh', overflowY: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton aria-label="close" onClick={handleCloseModal}>
              <CloseIcon />
            </IconButton>
          </div>
          <Typography variant="h5">Attractions</Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {attractions.map((attraction) => (
              <div key={attraction.id} style={{ marginBottom: '20px' }}>
                <img src={attraction.pictures[0]} alt="Attraction" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', paddingRight: '16px' }}>
                  <div>
                    <Typography variant="h6">{attraction.country}</Typography>
                    <Typography variant="subtitle1">{attraction.city}</Typography>
                  </div>
                  <Typography>${attraction.price}</Typography>
                </div>
                <Typography>{attraction.description}</Typography>
                <IconButton aria-label="Add attraction" onClick={() => handleAddAttraction(attraction.attraction_id)}>
                  <AddIcon />
                </IconButton>
                {selectedAttractions.includes(attraction.attraction_id) && (
                  <IconButton aria-label="Remove attraction" onClick={() => handleRemoveAttraction(attraction.attraction_id)}>
                    <RemoveIcon />
                  </IconButton>
                )}
              </div>
            ))}
          </div>
          <Button variant="contained" color="primary" onClick={handleSaveAttractions}>Save</Button>
        </div>
      </Modal>
    </>
  );
};

export default PackageDays;
