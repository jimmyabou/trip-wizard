import axios from 'axios';


export const loginUser = async (credentials) => {
  try {
    console.log("before sending request to axios");
    console.log(credentials);
    const response = await axios.post('/login', credentials);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error( error);

  }
}

