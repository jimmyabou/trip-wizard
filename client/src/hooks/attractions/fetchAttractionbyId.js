// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const FetchAttractionById = () => {
//   const [attractionData, setAttractionData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchAttraction = async () => {
//       if (attractionId) {
//         try {
//           const response = await axios.get(`/attractions/attraction/${attractionId}`);
//           setAttractionData(response.data);
//           setIsLoading(false);
//         } catch (error) {
//           console.error(error);
//           setIsLoading(false);
//         }
//       }
//     };
//     fetchAttraction();
//   }, [attractionId]);



//   return {
//     attractionData,
//     isLoading
//   };



// };

// export default FetchAttractionById;