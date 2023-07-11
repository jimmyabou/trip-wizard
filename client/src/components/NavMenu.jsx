import React, { useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import UserContext from "../providers/UserContext";

const NavMenu = () => {
  const { user, logoutHandler } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
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
            <i className="fa-solid fa-heart"></i>
          </div>
        </li>
      </ul>
      {user ? (
        <p
          style={{
            fontWeight: 'bold',
            fontSize: '1rem',
            textAlign: 'right',
          }}
        >
          Logged in as: {user.email}
        </p>
      ) : null}
    </div>
  );
};

export default NavMenu;
