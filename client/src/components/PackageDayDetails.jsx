import React, { useState, useContext, useEffect } from "react";
import { Card, Typography, Fab, } from "@mui/material";
import { PlannerContext } from "../providers/PlannerContext";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import TodayIcon from "@mui/icons-material/Today";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { grey } from "@mui/material/colors";
import '../styles/Package/packageDayDetails.scss'


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
        console.log(response.data.attractions)
        setTotalDuration(response.data.attractions.totalDuration / 60);
        setTotalPrice(response.data.attractions.totalPrice);
      } catch (error) {
        console.error(error);
      }
    };

    getAttractionsByDay(day.day_id);
    setUpdateDayAttractions(null)

  }, [updateDayAttractions]);

  async function handleExpand() {
    setIsExpanded(!isExpanded);
  }

  const deleteAttractionFromDay = async (dayId, attractionId) => {
    try {
      await axios.delete('/deleteAttractionFromDay', { data: { dayId, attractionId } });
      setUpdateDayAttractions('trigger delete')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Card id="card-container">
        <div className="day-details-container">
          <div className="day-info-container">
            <Typography variant="h5" className="day-title">
              <TodayIcon className="day-title-icon" />&nbsp;
              Day {dayNumber}
              <Typography component="span" className="day-date">
                {day.date.substring(0, 10)}
              </Typography>
            </Typography>

            <Typography variant="h5" className="day-day-title">
              {day.day_title}
            </Typography>

            {day.day_description && (
              <Typography variant="h6" className="day-description">
                {day.day_description}
              </Typography>
            )}

            <div className="total-duration-container">
              <div>
                <i className="fa-regular fa-hourglass-half total-duration-icon"></i>
                <span className="total-duration-text">Total Duration:</span>
              </div>
              <div>
                <span className="total-duration-value">{totalDuration} h</span>
              </div>
            </div>

            <div className="total-price-container">
              <div>
                <i className="fa-solid fa-dollar-sign total-price-icon"></i>
                <span className="total-price-text">Total Price:</span>
              </div>
              <div>
                <span className="total-price-value">$ {totalPrice}</span>
              </div>
            </div>
          </div>




          <div className="attractionsContainer">
            {attractions.map((attraction, index) => (
              <img
                key={attraction.attraction_id}
                src={attraction.pictures[0]}
                alt={attraction.name}
                className="attractionImage"
              />
            ))}
          </div>

          <div className="buttonsContainer">
            <Fab
              color="primary"
              aria-label="Add Attraction"
              onClick={() => handleOpenModal(day.day_id)}
              id="addFab"
            >
              <AddIcon className="addIcon" />
            </Fab>
            <DeleteIcon
              id="deleteIcon"
              onClick={() => handleDeleteDay(day.day_id)}
            />
          </div>


        </div>

        <div id="attractionsDetailsContainer">
          <div id="expandIconContainer" onClick={handleExpand}>
            {attractions.length > 0 && (
              <div id="expandIcon" className={isExpanded ? "expanded" : ""}>
                <KeyboardDoubleArrowDownIcon />
              </div>
            )}
          </div>

          {attractions.slice(0, isExpanded ? attractions.length : 0).map((attraction) => (
            <Card id="attractionCardContainer" key={attraction.attraction_id}>
              <div className="attractionCardContent">
                <img
                  src={attraction.pictures[0]}
                  alt={attraction.name}
                  className="attractionImageList"
                />
                <div className="attractionDetails">
                  <div className="attractionDuration">
                    <Typography variant="h5">
                      <i className="fa-regular fa-hourglass-half" style={{ color: "rgb(81, 212, 191)" }}></i> {attraction.duration / 60}h
                    </Typography>
                  </div>
                  <div className="attractionPrice">
                    <Typography variant="h5">
                      <i className="fa-solid fa-dollar-sign" style={{ color: "rgb(81, 212, 191)" }}></i> {attraction.price}
                    </Typography>
                  </div>
                </div>
                <div style={{ marginLeft: "20px" }}>
                  <Typography variant="h5" className="attractionName">{attraction.name}</Typography>
                  <Typography className="attractionDescription">{attraction.description}</Typography>
                </div>
                <div style={{ marginLeft: "auto" }}>
                  <DeleteIcon
                    style={{ color: "grey", cursor: "pointer", marginLeft: "10px", fontSize: "30px" }}
                    onClick={() => deleteAttractionFromDay(day.day_id, attraction.attraction_id)}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

      </Card>
    </>
  );
};

export default PackageDayDetails;