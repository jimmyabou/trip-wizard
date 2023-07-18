import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../providers/UserContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Card, CardContent, Typography, Button, CardMedia, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PackageList = () => {

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
    <div style={{ display: 'flex', flexWrap: 'wrap', margin: '45px' }}>
      {packages.map((pkg) => (
        <Card style={{ margin: 12, borderRadius: '10px', fontFamily: "DM Sans" }} key={pkg.package_id}>
          <CardMedia
            style={{
              height: 140, width: '25rem',
              height: '16rem'
            }}
            image="https://st2.depositphotos.com/16122460/42402/i/600/depositphotos_424022434-stock-photo-flat-lay-composition-travel-accessories.jpg"
            title="Package image"
          />
          <div style={{ display: 'flex', justifyContent: 'center', fontStyle: 'italic' }}>
            <CardContent style={{ borderBottom: '1px solid lightgrey', width: '88%' }}>
              <Typography variant="h5" component="div" style={{ fontFamily: "DM Sans", letterSpacing: '0.02rem' }}>
                {pkg.name}
              </Typography>
            </CardContent>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px', marginTop: 'auto', marginLeft: '1rem', marginRight: '1rem' }}>
            <Button id="reserve" variant="contained" color="primary" style={{ margin: 8, width: '8.5rem' }} onClick={() => planTripHandler(pkg.package_id)}>
              Plan trip
            </Button>

            <DeleteIcon style={{ color: 'grey', cursor: 'pointer', fontSize: "40px" }} onClick={() => deletePackage(pkg.package_id)} />
          </div>
        </Card>
      ))}
    </div>
  );
};
export default PackageList;