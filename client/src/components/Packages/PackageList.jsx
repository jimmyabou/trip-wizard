import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../providers/UserContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Card, CardContent, Typography, Button, CardMedia, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../../styles/Package/packageDetailsList.scss';

const PackageList = () => {
  // import necesary values and functions from UserContext using the useContext hook
  const navigate = useNavigate();
  const { user, fetchPackages, packages, newPackageAdded, onPackageClick, deletePackage } = useContext(UserContext);

  // Extracting the user ID from the user object
  const userId = user.id;

  // Fetching packages when newPackageAdded changes or on component mount
  useEffect(() => {
    fetchPackages(userId);
  }, [newPackageAdded]);

  // Handler function to navigate to a specific package's days page
  const planTripHandler = (packageId) => {
    navigate(`/packages/${packageId}/days`);
  };

  return (
    <div className="package-list-container">
      {packages.map((pkg) => (
        <Card className="package-card" key={pkg.package_id}>
          <CardMedia
            id="package-card-media"
            image="https://st2.depositphotos.com/16122460/42402/i/600/depositphotos_424022434-stock-photo-flat-lay-composition-travel-accessories.jpg"
            title="Package image"
          />
          <div className="card-content-wrapper">
            <CardContent id="card-content">
              <Typography className="package-name" variant="h5" component="div">
                {pkg.name}
              </Typography>
            </CardContent>
          </div>
          <div className="button-delete-wrapper">
            <Button id="reserve-button" variant="contained" color="primary" onClick={() => planTripHandler(pkg.package_id)}>
              Plan trip
            </Button>

            <DeleteIcon id="delete-icon" onClick={() => deletePackage(pkg.package_id)} />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default PackageList;
