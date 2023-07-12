import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';
import { TextField, Button, Card, Typography,Box } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const PackageDays = () => {
  const { packageId } = useParams();
  const [days, setDays] = useState([]);
  const [newDayTitle, setNewDayTitle] = useState('');
  const [newDayDescription, setNewDayDescription] = useState('');
  const [newDayDate, setNewDayDate] = useState(new Date());
  const [dayAdded, setDayAdded] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

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

  const handleAddDay = async (event) => {
    event.preventDefault();
    try {
      const newDay = {
        title: newDayTitle,
        description: newDayDescription,
        date: newDayDate,
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

  const renderDays = () => {
    return days
      .sort((a, b) => a.date.localeCompare(b.date))
      .map((day, index) => (
        <Card key={day.day_id} style={{ marginBottom: '10px', padding: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5">Day {index + 1}: {day.day_id}</Typography>
            <Typography>{day.day_id}</Typography>
            <Typography>Date: {day.date.substring(0, 10)}</Typography>
          </div>
        </Card>
      ));
  };

  return (
    <>
      <form onSubmit={handleAddDay} style={{ marginTop: '30px'}}>
        <div style={{ display: 'flex', alignItems: 'center', }}>
          <TextField
            label="Title"
            variant="outlined"
            style={{ marginRight: '10px', marginLeft:'20px' }}
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
          <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '10px',background: "#51D4BF", borderRadius: 20,height:50 }}>
            Add
          </Button>
        </div>
      </form>
      <div style={{ margin: '20px' }}>{renderDays()}</div>
    </>
  );
};

export default PackageDays;
