import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import './Header.css'; 
const Header = () => {
  return (
    <div className="header">
      <div className='menu-icon'>
        <FaBars/>
      </div>
      <h1 className="heading">Zintlr News</h1>
      <div className="search-icon">
      <FaSearch/>
      </div>
    </div>
  );
};

export default Header;
