import NavLogo from './NavLogo';

import NavSearchForm from './NavSearchForm';

import NavMenu from './NavMenu';

import '../styles/NavBar.scss';


import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


const Navbar = () => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

      <nav>
        <NavLogo />
        <NavSearchForm />
        <NavMenu />
      </nav>
      
    </LocalizationProvider>

  );
};

export default Navbar;
