import React, { useState ,useContext, useEffect } from "react";
import {
  Card,
  Typography,
  Fab,
} from "@mui/material";
import { PlannerContext } from "../providers/PlannerContext";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import TodayIcon from "@mui/icons-material/Today";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
// import ActivitiesListItem from './ActivitiesListItem';


const PackageDayDetails = ({ dayNumber, day }) => {
  const {
    handleDeleteDay,
    handleOpenModal,
    updateDayAttractions,
    setUpdateDayAttractions
  } = useContext(PlannerContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const [attractions, setAttractions] = useState([]);

  // useEffect(() => {
  //   getAttractionsByDay(updateDayAttractions);
  //   setUpdateDayAttractions(null)
  // }, [updateDayAttractions]);
  useEffect(() => {
  const getAttractionsByDay = async (dayId) => {
    try {
      let response = await axios.get(`/getAttractionsByDay/${dayId}`);
      setAttractions(response.data.attractions);
    } catch (error) {
      console.error(error);
    }
  };
  getAttractionsByDay(day.day_id);
}, [updateDayAttractions]);
 

  async function handleExpand() {
    setIsExpanded(!isExpanded);
    setUpdateDayAttractions(day.day_id)
    
  }

  return (
    <>
      <Card
        style={{
          marginBottom: "10px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5">
              Day {dayNumber}{" "}
              <Typography variant="h6" component="span">
                {day.date.substring(0, 10)} <TodayIcon />
              </Typography>
            </Typography>
            <Typography variant="h6"> {day.day_title}</Typography>
            <Typography>{day.day_description}</Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Fab
              color="primary"
              aria-label="Add Attraction"
              onClick={() => handleOpenModal(day.day_id)}
              style={{
                backgroundColor: "#51D4BF",
                width: "56px",
                height: "56px",
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
          {attractions && (
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
                style={{ width: "60%", marginBottom: "10px" }}
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
                      width: "10vh",
                      height: "10vh",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
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
    </>
  );
};

export default PackageDayDetails;