import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from "../../providers/UserContext";
import { AttractionsContext } from '../../providers/AttractionsContext';
import ModalContext from '../../providers/ModalContext';

const NavMenu = () => {
  const { user, logoutHandler } = useContext(UserContext);
  const { favAttractionIds } = useContext(AttractionsContext);
  const { handleOpenLoginModal } = useContext(ModalContext);
  const navigate = useNavigate();

  const isFav = favAttractionIds.length > 0;

  const logout = () => {
    navigate('/');
    logoutHandler();
  };

  const handleLoginAlert = () => {
    handleOpenLoginModal();
  };

  return (
    <div className="nav-menu">
      <ul>
        <li>
          {user ? (
            <Link to={`/favorites/${user.id}`}>Favorites</Link>
          ) : (
            <a href="#" onClick={handleLoginAlert}>Favorites</a>
          )}
        </li>
        <li>
          {user ? (
            <Link to={`/packages`}>Packages</Link>
          ) : (
            <a href="#" onClick={handleLoginAlert}>Packages</a>
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
        <li>
          <div className="hamburger-menu">
            <i class="fa-solid fa-bars"></i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
