import React, { useContext } from "react";
import { TextField, Button, Box } from "@mui/material";
import UserContext from "../../providers/UserContext";
import PackageList from "./PackageList";

const CreatePackage = () => {
    // import values and functions from the UserContext
  const { user, packageName,  createPackage,setPackageName } = useContext(UserContext);
  // Handler function to create a new package for the logged in user with package name provided from the form field 
  const handleSubmit =  (event) => {
    const userId=user.id
    event.preventDefault();
    createPackage(userId,packageName)
  }

  return (
    <>
      <form
        style={{ display: 'flex', alignItems: 'center', margin: '55px' }}
        onSubmit={handleSubmit}
      >
        <TextField style={{ marginRight: 12 }}
          label="Trip Name"
          value={packageName}
          onChange={(event) => setPackageName(event.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" style={{ padding: '6px 16px', minWidth: 150, maxHeight:50,background: "#51D4BF", fontFamily: "DM Sans",letterSpacing: '0.02rem', borderRadius: '10px',fontSize: '1.3rem' }}>
          Add Trip
        </Button>
      </form>
      <PackageList />
    </>
  );
};

export default CreatePackage;
