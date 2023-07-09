import axios from "axios";

export const createUser = async (userData) => {
  try {
    // console.log("before sending reuest axios");
    // console.log(userData);
    const response = await axios.post("/createUser", userData);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
  }
};
