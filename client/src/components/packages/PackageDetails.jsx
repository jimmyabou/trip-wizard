import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TextField, Button, Card, Typography, IconButton, Fab, } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { PlannerContext } from "../../providers/PlannerContext";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PackageDayList from "./PackageDayList";
import PackageDayModalActivitiesList from "./PackageDayModalActivitiesList";
import UserContext from '../../providers/UserContext';
import Modal from "react-modal";


const PackageDetails = () => {
  const { user } = useContext(UserContext);
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
    getPackageFavoritedattractions,
    setPackageId,
  } = useContext(PlannerContext);

  const { packageId } = useParams();

  useEffect(() => {
    fetchDays(packageId);
  }, [dayAdded]);

  useEffect(() => {
    // getAttractions();
    getPackageFavoritedattractions(user.id);
  }, [fetchAttractions]);

  return (
    <>
      <form
        onSubmit={() => handleAddDay(packageId)}
        style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}
      >
        <div style={{ display: "flex", alignItems: "center", zIndex: 0 }}>
          <TextField
            label="Title"
            variant="outlined"
            style={{ marginRight: "10px", marginLeft: "20px" }}
            value={newDayTitle}
            onChange={(event) => setNewDayTitle(event.target.value)}
          />
          <TextField
            label="Description"
            variant="outlined"
            style={{ marginRight: "10px" }}
            value={newDayDescription}
            onChange={(event) => setNewDayDescription(event.target.value)}
          />
          <div style={{ position: "relative" }}>
            <CalendarTodayIcon
              style={{
                position: "absolute",
                top: "50%",
                right: "8px",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
              onClick={toggleDatePicker}
            />
            <TextField
              style={{ cursor: "pointer" }}
              value={newDayDate.toLocaleDateString()}
              onClick={toggleDatePicker}
            />
            {isDatePickerOpen && (
              <div style={{ position: "absolute", zIndex: "9999" }}>
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

            style={{ marginLeft: "20px", padding: '6px 16px', minWidth: 150, maxHeight: 50, background: "#51D4BF", fontFamily: "DM Sans", letterSpacing: '0.02rem', borderRadius: '10px', fontSize: '1.3rem' }}
          >
            Add
          </Button>
        </div>
      </form>
      <div style={{ margin: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <PackageDayList days={days}></PackageDayList>
      </div >
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: '90%',
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "8px",
            maxHeight: "200vh",
            maxWidth: "130vw",
            overflowY: "auto",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <div style={{ display: "flex", justifyContent: "start", marginLeft: "auto" }}>
          <IconButton aria-label="close" onClick={handleCloseModal}>
            <CloseIcon />
          </IconButton>
        </div>
        <Typography variant="h4" style={{fontFamily: "DM Sans"}}>Attractions</Typography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <PackageDayModalActivitiesList
            attractions={attractions}
            handleAddAttraction={handleAddAttraction}
            selectedAttractions={selectedAttractions}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveAttractions}
          style={{
            position: "sticky",
            bottom: "10px",
            left: "2000px",
            borderRadius: "10%",
            width: "100px",
            height: "50px",
            zIndex: "999",
            background: "#51D4BF",
            fontFamily: "DM Sans",
            letterSpacing: '0.02rem',
            borderRadius: '10px',
            fontSize: '1.3rem'
          }}
        >
          Save
        </Button>
      </Modal>
    </>
  );
};

export default PackageDetails;


