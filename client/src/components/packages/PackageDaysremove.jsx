import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Card, Typography, Modal, IconButton, Fab } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import TodayIcon from '@mui/icons-material/Today';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { PlannerContext } from '../../providers/PlannerContext';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PackageDays = () => {
  const {
    days,
    newDayTitle,
    setNewDayTitle,
    newDayDescription,
    setNewDayDescription,
    newDayDate,
    setNewDayDate,
    dayAdded,
    setDayAdded,
    isDatePickerOpen,
    toggleDatePicker,
    isOpen,
    setIsOpen,
    attractions,
    selectedAttractions,
    setSelectedAttractions,
    fetchAttractions,
    setFetchAttractions,
    activeDayId,
    setActiveDayId,
    expanded,
    handleDeleteDay,
    handleOpenModal,
    handleCloseModal,
    handleAddAttraction,
    handleRemoveAttraction,
    handleSaveAttractions,
    handleAddDay,
    handleExpand,
    setDays,
    setAttractions,
    fetchDays,
    getAttractions,

    setPackageId
  } = useContext(PlannerContext);

  const { packageId } = useParams();


  useEffect(() => {

    fetchDays(packageId);

  }, [dayAdded]);

  useEffect(() => {

    getAttractions();
  }, [fetchAttractions]);

  const renderDays = () => {
    console.log("Days:", days);
    return days
      .sort((a, b) => a.date.localeCompare(b.date))
      .map((day, index) => (
        <Card
          key={day.day_id}  //key pro unique key
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
          <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {attractions && (
              <div style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }} onClick={handleExpand}>
                {expanded ? (
                  <KeyboardDoubleArrowDownIcon
                    style={{ fontSize: '40px', transform: 'rotate(180deg)', color: '#9e9e9e' }}
                  />
                ) : (
                  <KeyboardDoubleArrowDownIcon style={{ fontSize: '40px', color: '#9e9e9e' }} />
                )}
              </div>
            )}
            {attractions.slice(0, expanded ? attractions.length : 0).map((attraction) => (
              <Card
                key={attraction.attraction_id}
                style={{ width: '60%', marginBottom: '10px' }}
              >
                <div
                  style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', margin: '20px' }}
                >
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
              </Card>
            ))}
          </div>
        </Card>
      ));
  };

  return (
    <>
      <form onSubmit={() => handleAddDay(packageId)} style={{ marginTop: '30px' }}>
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginLeft: '20px', background: '#51D4BF', borderRadius: 20, height: '50px' }}
          >
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
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
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
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      paddingRight: '16px',
                    }}
                  >
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
                {!selectedAttractions.includes(attraction.attraction_id) && (
                  <div
                    style={{
                      marginTop: 'auto',
                      paddingTop: '10px',
                    }}
                  >
                    <Fab
                      color="primary"
                      aria-label="Add Attraction"
                      onClick={() => handleAddAttraction(attraction.attraction_id)}
                      style={{
                        backgroundColor: '#51D4BF',
                        width: '35px',
                        height: '30px',
                      }}
                    >
                      <AddIcon style={{ fontSize: '32px' }} />
                    </Fab>
                  </div>
                )}
                {selectedAttractions.includes(attraction.attraction_id) && (
                  <DeleteIcon
                    style={{
                      color: 'grey',
                      cursor: 'pointer',
                      marginLeft: '10px',
                      fontSize: '40px',
                      marginTop: 'auto',
                      paddingTop: '10px',
                    }}
                    onClick={() => handleRemoveAttraction(attraction.attraction_id)}
                  />
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
            }}
          >
            Save
          </Button>
        </Card>
      </Modal>
    </>
  );
};

export default PackageDays;