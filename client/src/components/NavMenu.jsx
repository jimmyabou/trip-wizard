import React from 'react';




const NavMenu = () => {

  return (
    <div class="nav-menu">
      <ul>
        <li>
          <a href="#">Favorites</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
        <li>
          <div class="fav-badge">
            <i class="fa-solid fa-heart"></i>
          </div>
        </li>
      </ul>
    </div>

  );
};

export default NavMenu;
