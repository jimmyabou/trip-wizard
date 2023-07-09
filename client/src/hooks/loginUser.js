import axios from 'axios';


export const loginUser = async (credentials) => {
  try {
    // console.log("before sending request to axios");
    // console.log(credentials);
    const response = await axios.post('/login', credentials);
    
    if(response.data==='Invalid username or password'){
      alert(response.data);
    }
    else if (response.data==='user does not exist'){
      alert(response.data);
    }
    return response.data;
  } catch (error) {
    console.error( error);

  }
}

