import React from 'react';




const NavMenu = () => {

  return (
    <div className="nav-menu">
      <ul>
        <li>
          <a href="#">Favorites</a>
        </li>
        <li>
          <a href="#">Logout</a>
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
