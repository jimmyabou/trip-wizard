import React from 'react';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';



const NavSearchForm = () => {

  return (

    <form action="" name="nav-form" class="nav-form">
      <input type="text" name="location" placeholder="Anywhere" />
      <DatePicker className="nav-form-middle" label="Start date"/>
      <DatePicker className="nav-form-middle" label="End date"/>
      {/* <input type="text" name="duration" placeholder="Days" class="nav-form-middle" /> */}
      <input type="text" name="budget" placeholder="Budget" />
    </form>

  );


};

export default NavSearchForm;
