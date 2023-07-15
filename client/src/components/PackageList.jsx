import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../providers/UserContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Card, CardContent, Typography, Button, CardMedia, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { PlannerContext } from '../providers/PlannerContext';

const PackageList = () => {
//   const {
//     packageId,
//   } = useContext(PlannerContext);
  
  const navigate = useNavigate();
  const { user, fetchPackages, packages, newPackageAdded, onPackageClick, deletePackage } = useContext(UserContext);
  const userId = user.id;

  useEffect(() => {
    fetchPackages(userId);
  }, [newPackageAdded]);

  const planTripHandler = (packageId) => {
    navigate(`/packages/${packageId}/days`);
  };
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {packages.map((pkg) => (
        <Card style={{  margin: 12 }} key={pkg.package_id}>
          <CardMedia
            style={{ height: 140 ,width: '25rem',
              height: '16rem'}}
            image="https://globalgrasshopper.com/wp-content/uploads/2016/06/Maremma-Tuscany.jpg"
            title="Package image"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {pkg.name}
            </Typography>
          </CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}>
            <Button variant="contained" color="primary" style={{ margin: 8, background: "#51D4BF", borderRadius: 20, maxHeight: 30 }} onClick={() => planTripHandler(pkg.package_id)}>
              Plan trip
            </Button>

            <DeleteIcon style={{ color: 'grey', cursor: 'pointer' }} onClick={() => deletePackage(pkg.package_id)} />
          </div>
        </Card>
      ))}
    </div>
  );
};
export default PackageList;