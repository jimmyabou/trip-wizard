import NavLogo from './NavLogo';

import NavSearchForm from './NavSearchForm';

import NavMenu from './NavMenu';


import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


const Navbar = (props) => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

      <nav>
        <NavLogo />
        <NavSearchForm />
        <NavMenu email={props.email} logoutHandler={props.logoutHandler} />
      </nav>

    </LocalizationProvider>

  );
};

export default Navbar;
