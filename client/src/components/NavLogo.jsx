import React from 'react';
import logo from '../logo.jpg';
import { useNavigate } from 'react-router-dom';


const NavLogo = () => {

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
      <img src={logo} alt="Trip-Wizard logo" />
      <h1>TripWizard</h1>
    </div>

  );
};

export default NavLogo;
