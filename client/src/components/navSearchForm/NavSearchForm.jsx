import React from 'react';

import NavSearchDateModal from './NavSearchDateModal';
import NavSearchLocation from './NavSearchLocation';
import Divider from '@mui/material/Divider';




const NavSearchForm = () => {

  return (

    <form action="" name="nav-form" className="nav-form">
      <NavSearchLocation />
      <Divider orientation="vertical" flexItem />
      <NavSearchDateModal />
      <Divider orientation="vertical" flexItem />
      {/* <input type="text" name="duration" placeholder="Days" class="nav-form-middle" /> */}
      <input type="text" name="budget" placeholder="Budget" />
    </form>

  );


};

export default NavSearchForm;
