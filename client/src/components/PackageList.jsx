import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import UserContext from '../providers/UserContext';
import { Card, CardContent, Typography, Button, CardMedia } from '@mui/material';

const PackageList = () => {
  const { user,fetchPackages,packages,newPackageAdded,onPackageClick } = useContext(UserContext);
  const userId = user.id;

  useEffect(() => {
    fetchPackages(userId);
  }, [newPackageAdded]);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {packages.map((pkg) => (
        <Card style={{ width: 300, margin: 12 }} key={pkg.package_id}>
          <CardMedia
            style={{ height: 140 }}
            image="https://globalgrasshopper.com/wp-content/uploads/2016/06/Maremma-Tuscany.jpg"
            title="Package image"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {pkg.name}
            </Typography>
          </CardContent>
          <Button variant="contained" color="primary" style={{ margin: 8,background: "#51D4BF", borderRadius:20 , maxHeight:30}} onClick={() => onPackageClick(pkg.package_id)}>
            Plan trip
          </Button>
        </Card>
      ))}
    </div>
  );
};
export default PackageList;
