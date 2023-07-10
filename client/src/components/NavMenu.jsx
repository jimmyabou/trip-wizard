import React from 'react';
import UserForm from './UserForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect,useContext } from 'react';
import Cookies from 'js-cookie';
import UserContext from "../hooks/UserContext";

const NavMenu = () => {
  const { user,logoutHandler } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(null);
  const [loggedInID, setLoggedInID] = useState(null);
  useEffect(() => {
    const userCookie = Cookies.get('user');
    if (userCookie) {
      const { id, email } = JSON.parse(userCookie);
      setLoggedIn(email);
      setLoggedInID(id)
    }
  }, []);
  console.log(user.email)
  const logout = () => {
    setLoggedIn(false);
    Cookies.remove('user');
    logoutHandler();
  };
  useEffect(() => {

  }, [loggedIn]);


  return (
    <div className="nav-menu">
      <ul>
        <li>
          <a href="#">Favorites</a>
        </li>
        <li>
          {(user.email) || loggedIn ? (
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
      {loggedIn || (user.email) ? (
        <p
          style={{
            fontWeight: 'bold',
            fontSize: '20px',
            textAlign: 'right',
          }}
        >
          Logged in as: {(user.email) || loggedIn}
        </p>
      ) : null}
    </div>

  );
};

export default NavMenu;


/* <a href="#">Logout</a> */