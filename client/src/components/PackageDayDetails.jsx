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
  const [updateAttractions, setUpdateAttractions] = useState(false);

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
  setUpdateDayAttractions(null)

}, [updateDayAttractions]);
 

  async function handleExpand() {
    setIsExpanded(!isExpanded);
 
  }

  const deleteAttractionFromDay = async (dayId, attractionId ) => {
    try {
      await axios.delete('/deleteAttractionFromDay', { data: { dayId, attractionId } });
      setUpdateDayAttractions('trigger delete')
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
          backgroundColor: '#fafafa'
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", marginLeft: '20px', marginTop: '20px', flexWrap: "wrap", maxWidth: "10%", overflow: "auto"}}>
            <Typography variant="h5">
              Day {dayNumber}{" "}
              <div >
              <Typography variant="h6" component="span">
              <TodayIcon style={{ fontSize: "25px", color: "#9e9e9e", verticalAlign: 'middle'}} />  {day.date.substring(0, 10)} 
              </Typography>
              </div>
            </Typography>
            <Typography variant="h6"> {day.day_title}</Typography>
            <Typography>{day.day_description}</Typography>
          </div>
          
          {/* <div style={{ display: "flex", flexDirection: "column", width: "70%"}}> */}
          <div style={{ display: "flex",maxWidth: "70%", flexWrap: "wrap"}}>
  {attractions.map((attraction, index) => (
    
      
      <img
      key={attraction.attraction_id}
        src={attraction.pictures[0]}
        alt={attraction.name}
        style={{
          width: "4rem",
          height: "4rem",
          borderRadius: "50%",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.7)",
          margin: '4px',
          border: "1px solid rgba(255, 255, 255, 0.1)",//u started
        }}
      />
    
  ))}
</div>
          {/* </div> */}
          
          
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
          {attractions.length>0 && (
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
                style={{ width: "70%", marginBottom: "10px" }}
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
                  <div  style={{
                    display: "flex",
                flexDirection: "column",
                marginLeft: '20px'
                  }}>
                    <div style={{ width: '-moz-max-content', width: 'max-content' }}>
                      <Typography variant="h5"><i className="fa-regular fa-hourglass-half" style={{color: "grey"}}></i> {attraction.duration / 60}h</Typography></div>
                    <div style={{ width: '-moz-max-content', width: 'max-content' }}>
                      <Typography variant="h5"><i className="fa-solid fa-dollar-sign" style={{color: "grey"}}></i> {attraction.price}</Typography></div>
                  </div>
                  <div style={{
                    marginLeft: "20px",
                  }}>
                    <Typography variant="h5">{attraction.name}</Typography>
                  <Typography>{attraction.description}</Typography></div>
                <div>
                <DeleteIcon
              style={{
                color: "grey",
                cursor: "pointer",
                marginLeft: "10px",
                fontSize: "30px",
              }}
              onClick={()=>deleteAttractionFromDay(day.day_id, attraction.attraction_id )}
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