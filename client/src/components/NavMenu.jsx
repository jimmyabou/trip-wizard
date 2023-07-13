import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from "../providers/UserContext";
import { AttractionsContext } from '../providers/AttractionsContext';
import { red } from '@mui/material/colors';

const NavMenu = () => {
  const { user, logoutHandler } = useContext(UserContext);
  const { favAttractionIds } = useContext(AttractionsContext);

  const isFav = favAttractionIds.length > 0;

  const logout = () => {
    logoutHandler();
  };

  return (
    <div className="nav-menu">
      <ul>
        <li>
          {user ? (
            <Link to={`/favorites/${user.id}`}>Favorites</Link>
          ) : (
            <a href="#">Favorites</a>
          )}
        </li>
        <li>
          {user ? (
            <a href="#" onClick={logout}>Logout</a>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
        <li>
          <div className="fav-badge">
            <i className={`fa-solid fa-heart`} style={isFav ? { color: '#F5543E' } : { color: '#FFF' }}></i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
