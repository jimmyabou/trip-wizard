import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export const PlannerContext = createContext();

export const PlannerProvider = ({ children }) => {
  // const { packageId } = useParams();
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
  const [expanded, setExpanded] = useState(false);
  const [packageId, setPackageId] = useState(null);

  
    const fetchDays = async (packageId) => {
      console.log(packageId, 'from')

      try {
        const response = await axios.get(`/getdays/${packageId}`);
        setDays(response.data.days);
        setDayAdded(false);
        console.log(days)
        console.log(packageId)
      } catch (error) {
        console.error(error);
      }
    };
 //////////////////////////////////////////////////
    // useEffect(() => {
    //   if (packageId) {
    //     fetchDays();
    //   }
    // }, [packageId]);

   
////////////////////////////////////////////////////////////////
    const getAttractions = async () => {
      try {
        const response = await axios.get('/attractions');
        setAttractions(response.data.attractions);
        setFetchAttractions(false);
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
    handleCloseModal();

    try {
      await axios.post(`/insertAttractionsByDay/${activeDayId}`, { attractions: selectedAttractions });
      setSelectedAttractions([]);
      console.log('successfully updated attraction list for this day');
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddDay = async (packageId) => {
    // event.preventDefault();
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

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <PlannerContext.Provider
      value={{
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
        packageId,
        setPackageId,
      }}
    >
      {children}
    </PlannerContext.Provider>
  );
};
