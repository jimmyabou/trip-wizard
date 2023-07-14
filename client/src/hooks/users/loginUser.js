import axios from 'axios';


export const loginUser = async (credentials) => {
  try {
    // console.log("before sending request to axios");
    console.log("data before axios post", credentials);
    const response = await axios.post('/login', credentials);
    console.log("after axios post", response.data);

    const user = { email: response.data.email, userId: response.data.userId };

    if (response.data === 'Invalid username or password') {
      alert(response.data);
      return;
    }
    else if (response.data === 'user does not exist') {
      alert(response.data);
      return;
    }
    console.log(user);
    return user;
  } catch (error) {
    console.error(error);

  }
}

