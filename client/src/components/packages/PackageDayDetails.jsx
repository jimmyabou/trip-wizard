import React, { useState, useContext, useEffect } from "react";
import { Card, Typography, Fab, } from "@mui/material";
import { PlannerContext } from "../../providers/PlannerContext";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import TodayIcon from "@mui/icons-material/Today";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { grey } from "@mui/material/colors";

const PackageDayDetails = ({ dayNumber, day }) => {
  const {
    handleDeleteDay,
    handleOpenModal,
    updateDayAttractions,
    setUpdateDayAttractions
  } = useContext(PlannerContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const [attractions, setAttractions] = useState([]);
  const [totalDuration, setTotalDuration] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const getAttractionsByDay = async (dayId) => {
      try {
        let response = await axios.get(`/getAttractionsByDay/${dayId}`);
        setAttractions(response.data.attractions.attractions);
        console.log(response.data.attractions);
        setTotalDuration(response.data.attractions.totalDuration / 60);
        setTotalPrice(response.data.attractions.totalPrice);
      } catch (error) {
        console.error(error);
      }
    };

    getAttractionsByDay(day.day_id);
    setUpdateDayAttractions(null);

  }, [updateDayAttractions]);

  async function handleExpand() {
    setIsExpanded(!isExpanded);
  }

  const deleteAttractionFromDay = async (dayId, attractionId) => {
    try {
      await axios.delete('/deleteAttractionFromDay', { data: { dayId, attractionId } });
      setUpdateDayAttractions('trigger delete');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Card
        style={{
          marginBottom: "10px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: 'white',
          borderRadius: '10px',
          width: '95%',
          justifyContent: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", marginLeft: '20px', marginTop: '20px', flexWrap: "wrap", minWidth: "25%", overflow: "auto", width: '25%' }}>
            <Typography variant="h5" style={{ fontFamily: "DM Sans", letterSpacing: '0.02rem', fontStyle: 'italic', fontWeight: 'bold', borderBottom: '1px solid lightgrey', width: '88%', display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <TodayIcon style={{ fontSize: "30px", color: "rgb(81, 212, 191)" }} />&nbsp;
              Day {dayNumber}
              <Typography component="span" style={{ fontFamily: "DM Sans", marginLeft: '10px' }}>
                {day.date.substring(0, 10)}
              </Typography>
            </Typography>

            <Typography variant="h5" style={{ fontFamily: "DM Sans", letterSpacing: '0.02rem', marginTop: '15px', fontStyle: 'italic' }}>{day.day_title}</Typography>

            {day.day_description && <Typography variant="h6" style={{ fontFamily: "DM Sans", letterSpacing: '0.02rem', borderBottom: '1px solid lightgrey', width: '88%', color: 'grey', paddingBottom: '10px', marginTop: '10px' }}>
              {day.day_description}
            </Typography>}

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: '15px', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fa-regular fa-hourglass-half" style={{ fontSize: "25px", color: "rgb(81, 212, 191)", marginRight: '10px' }}></i>
                <span style={{ fontSize: "22px" }}>Total Duration:</span>
              </div>
              <div>
                <span style={{ fontSize: "22px", marginRight: '5rem' }}>{totalDuration} h</span>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fa-solid fa-dollar-sign" style={{ fontSize: "25px", color: "rgb(81, 212, 191)", marginRight: '10px' }}></i>
                <span style={{ fontSize: "22px" }}>Total Price:</span>
              </div>
              <div>
                <span style={{ fontSize: "22px", marginRight: '5rem' }}>$ {totalPrice}</span>
              </div>
            </div>
          </div>




          <div style={{ display: "flex", maxWidth: "75%", flexWrap: "wrap", justifyContent: "center" }}>
            {attractions.map((attraction, index) => (


              <img
                key={attraction.attraction_id}
                src={attraction.pictures[0]}
                alt={attraction.name}
                style={{
                  width: "5rem",
                  height: "5rem",
                  borderRadius: "50%",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.7)",
                  margin: '20px',
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              />

            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", minWidth: '25%', justifyContent: "end", marginRight: '20px' }}>
            <Fab
              color="primary"
              aria-label="Add Attraction"
              onClick={() => handleOpenModal(day.day_id)}
              style={{
                backgroundColor: "#51D4BF",
                width: "56px",
                height: "56px",
                marginRight: '20px',
                zIndex: 0
              }}
            >
              <AddIcon style={{ fontSize: "32px" }} />
            </Fab>
            <DeleteIcon
              style={{
                color: "grey",
                cursor: "pointer",
                marginLeft: "10px",
                fontSize: "40px",
                marginRight: '20px'

              }}
              onClick={() => handleDeleteDay(day.day_id)}
            />
          </div>
        </div>
        <div
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {attractions.length > 0 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={handleExpand}
            >
              {isExpanded ? (
                <KeyboardDoubleArrowDownIcon
                  style={{
                    fontSize: "40px",
                    transform: "rotate(180deg)",
                    color: "#9e9e9e",
                  }}
                />
              ) : (
                <KeyboardDoubleArrowDownIcon
                  style={{ fontSize: "40px", color: "#9e9e9e" }}
                />
              )}
            </div>
          )}
          {attractions
            .slice(0, isExpanded ? attractions.length : 0)
            .map((attraction) => (
              <Card
                key={attraction.attraction_id}
                style={{
                  width: "70%", marginBottom: "10px", boxShadow: "none",
                  border: "none", borderBottom: "1px solid lightgrey", borderRadius: 'none'
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                    margin: "20px",
                  }}
                >
                  <img
                    src={attraction.pictures[0]}
                    alt={attraction.name}
                    style={{
                      width: "5rem",
                      height: "5rem",
                      borderRadius: "5%",
                      marginRight: "10px",
                    }}
                  />
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: '20px'
                  }}>
                    <div style={{ width: '-moz-max-content', width: 'max-content' }}>
                      <Typography variant="h5"><i className="fa-regular fa-hourglass-half" style={{ color: "rgb(81, 212, 191)" }}></i> {attraction.duration / 60}h</Typography></div>
                    <div style={{ width: '-moz-max-content', width: 'max-content' }}>
                      <Typography variant="h5"><i className="fa-solid fa-dollar-sign" style={{ color: "rgb(81, 212, 191)" }}></i> {attraction.price}</Typography></div>
                  </div>
                  <div style={{
                    marginLeft: "20px",
                  }}>
                    <Typography variant="h5" style={{ fontFamily: "DM Sans", letterSpacing: '0.02rem', fontStyle: 'italic' }}>{attraction.name}</Typography>
                    <Typography style={{ fontFamily: "DM Sans", letterSpacing: '0.02rem' }}>{attraction.description}</Typography></div>
                  <div style={{ marginLeft: "auto" }}>
                    <DeleteIcon
                      style={{
                        color: "grey",
                        cursor: "pointer",
                        marginLeft: "10px",
                        fontSize: "30px",
                      }}
                      onClick={() => deleteAttractionFromDay(day.day_id, attraction.attraction_id)}
                    /></div>
                </div>
              </Card>
            ))}
        </div>
      </Card>
    </>
  );
};

export default PackageDayDetails;