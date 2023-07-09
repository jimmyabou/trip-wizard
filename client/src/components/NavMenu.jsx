import React from 'react';
import UserForm from './userForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const NavMenu = (props) => {
  const [loggedIn, setLoggedIn] = useState(Cookies.get('user'));
  // console.log(props.email)
  const logout = () => {
    setLoggedIn(false);
    Cookies.remove('user');
    props.logoutHandler();
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
          {(props.email) || loggedIn ? (
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
      {loggedIn || (props.email) ? (
        <p
          style={{
            fontWeight: 'bold',
            fontSize: '20px',
            textAlign: 'right',
          }}
        >
          Logged in as: {(props.email) || loggedIn}
        </p>
      ) : null}
    </div>

  );
};

export default NavMenu;


/* <a href="#">Logout</a> */