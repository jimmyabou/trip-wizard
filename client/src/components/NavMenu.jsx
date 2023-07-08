import React from 'react';
import UserForm from './userForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



const NavMenu = () => {

  return (
    <div className="nav-menu">
      <ul>
        <li>
          <a href="#">Favorites</a>
        </li>
        <li>
        
        <Link to="/login">Login</Link>
        </li>
        <li>
          <div className="fav-badge">
            <i className="fa-solid fa-heart"></i>
          </div>
        </li>
      </ul>
    </div>

  );
};

export default NavMenu;


 /* <a href="#">Logout</a> */