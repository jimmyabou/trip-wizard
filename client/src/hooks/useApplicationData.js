// import { useState, useEffect, useReducer } from 'react';
// import { reducer } from './useReducer';

// const useApplicationData = () => {
//   // Initial state for the application
//   const initialState = {
//     array: [],
//     status: false,
//     showModal: false,
//     photoObj: null,
//     arr: [],
//     topicId: null,
//     showFavorites: false
//   };

//   // State variables and reducer
//   const [photos, setPhotos] = useState([]);
//   const [topics, setTopics] = useState([]);
//   const [state, dispatch] = useReducer(reducer, initialState);

//   // Fetching photos and topics data on component mount
//   useEffect(() => {
//     fetch('/api/photos')
//       .then((res) => res.json())
//       .then((data) => {
//         setPhotos(data);
//       }).catch(error => {
//       });

//     fetch('/api/topics')
//       .then((res) => res.json())
//       .then((data) => {
//         setTopics(data);
//       }).catch(error => {
//       });
//   }, []);

//   // Fetching photos data based on clicked topic in Navigartion bar
//   useEffect(() => {
//     if (state.topicId) {
//       fetch(`/api/topics/photos/${state.topicId}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setPhotos(data);
//         }).catch(error => {
//         });
//     }
//   }, [state.topicId]);

//   // Updating status based on array length so when the array has favorited photos the length is >0 and sets STATUS to true
//   useEffect(() => {
//     dispatch({ type: 'SET_STATUS', value: state.array.length > 0 });
//   }, [state.array]);

//   // Handler for selecting photos based on topic
//   const photosByTopicHandler = (newTopicId) => {
//     dispatch({ type: 'SET_TOPIC_ID', value: newTopicId });
//   };

//   // Handler for toggling favorite icon by adding/removing favorited photo object into the favorites array 
//   //checks if the obj exists and removes it because it was unfavorited or adds it to the array
//   const favoriteIconClick = (photo) => {
//     const updatedArray = state.array.find((ele) => ele.id === photo.id)
//       ? state.array.filter((ele) => ele.id !== photo.id)
//       : [photo, ...state.array];

//     dispatch({
//       type: 'SET_ARRAY',
//       value: updatedArray,
//     });
//   };

//   // Handler for displaying photo details on click
//   const displayPhotoOnClick = (id) => {
//     let obj = photos.find(ele => ele.id === id);
//     let sim = obj.similar_photos;
//     let simArray = Object.values(sim);
//     dispatch({ type: 'SET_ARR', value: simArray });
//     dispatch({ type: 'SET_PHOTO_OBJ', value: obj });
//   };

//   // Handler for toggling modal visibility
//   const modalHandler = () => {
//     dispatch({ type: 'SET_SHOW_MODAL', value: !state.showModal });
//   };

//   // Handler for toggling favorites modal visibility
//   const favoritesModalHandler = () => {
//     dispatch({ type: 'SET_SHOW_FAVORITES', value: !state.showFavorites });
//   };

//   return {
//     ...state,
//     photos,
//     topics,
//     photosByTopicHandler,
//     favoriteIconClick,
//     displayPhotoOnClick,
//     modalHandler,
//     favoritesModalHandler
//   };
// };

// export default useApplicationData;
