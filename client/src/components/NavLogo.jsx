import React, { useContext } from 'react';
import logo from '../logo.jpg';
import { useNavigate } from 'react-router-dom';
import { AttractionsContext } from '../providers/AttractionsContext';


const NavLogo = () => {

  const navigate = useNavigate();
  const { setFilters } = useContext(AttractionsContext);


  const handleLogoClick = () => {
    navigate('/');
    setFilters([]);

  };

  return (
    <div className="logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
      <img src={logo} alt="Trip-Wizard logo" />
      <h1>TripWizard</h1>
    </div>

  );
};

export default NavLogo;
