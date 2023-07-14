import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { TextField, Button, Box } from "@mui/material";
import UserContext from "../providers/UserContext";
import PackageList from "./PackageList";

const CreatePackage = () => {
  const { user, packageName,  createPackage,setPackageName } = useContext(UserContext);
  const handleSubmit =  (event) => {
    const userId=user.id
    event.preventDefault();
    createPackage(userId,packageName)
  }

  return (
    <>
      <form
        style={{ display: 'flex', alignItems: 'center', margin: 12 }}
        onSubmit={handleSubmit}
      >
        <TextField style={{ marginRight: 12 }}
          label="Trip Name"
          value={packageName}
          onChange={(event) => setPackageName(event.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" style={{ padding: '6px 16px', minWidth: 150, maxHeight:50,background: "#51D4BF" }}>
          Add Trip
        </Button>
      </form>
      <PackageList />
    </>
  );
};

export default CreatePackage;
