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
import '../../styles/Package/packageDetails.scss'

const PackageDetails = () => {
  // Access values and functions from the PlannerContext and UserContext
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
    isDatePickerOpen,
    toggleDatePicker,
    isOpen,
    attractions,
    selectedAttractions,
    fetchAttractions,
    handleCloseModal,
    handleAddAttraction,
    handleSaveAttractions,
    handleAddDay,
    fetchDays,
    getPackageFavoritedattractions,
  } = useContext(PlannerContext);

  // Extract packageId from the URL 
  const { packageId } = useParams();

  // Fetch the list of days for the selected package
  useEffect(() => {
    fetchDays(packageId);
  }, [dayAdded]);

  // Fetch favored attractions related to the user
  useEffect(() => {
    getPackageFavoritedattractions(user.id);
  }, [fetchAttractions]);

  return (
    <>
      <form id="add-day-form" onSubmit={() => handleAddDay(packageId)}>
        <div className="form-container">
          <TextField
            id="title-field"
            label="Title"
            variant="outlined"
            value={newDayTitle}
            onChange={(event) => setNewDayTitle(event.target.value)}
          />
          <TextField
            id="description-field"
            label="Description"
            variant="outlined"
            value={newDayDescription}
            onChange={(event) => setNewDayDescription(event.target.value)}
          />
          <div className="date-picker-container">
            <CalendarTodayIcon
              id="calendar-icon"
              onClick={toggleDatePicker}
            />
            <TextField
              id="date-field"
              value={newDayDate.toLocaleDateString()}
              onClick={toggleDatePicker}
            />
            {isDatePickerOpen && (
              <div className="date-picker">
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
            id="add-button"
            type="submit"
            variant="contained"
            color="primary"
          >
            Add
          </Button>
        </div>
      </form>
      <div className="package-day-list-container">
        <PackageDayList days={days}></PackageDayList>
      </div>
      <Modal
        className="attractions-modal"
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
      >
        <div id="modal-header">
          <IconButton aria-label="close" onClick={handleCloseModal}>
            <CloseIcon />
          </IconButton>
        </div>
        <Typography id='Attractions-title-modal' variant="h5">Attractions</Typography>
        <div className="modal-activities-list">
          <PackageDayModalActivitiesList
            attractions={attractions}
            handleAddAttraction={handleAddAttraction}
            selectedAttractions={selectedAttractions}
          />
        </div>
        <Button
          id="save-button"
          variant="contained"
          color="primary"
          onClick={handleSaveAttractions}
        >
          Save
        </Button>
      </Modal>
    </>
  );
};

export default PackageDetails;
