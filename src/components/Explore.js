import React from 'react';
import './Explore.css';
import { Link } from 'react-router-dom';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Explore = () => {
  return (
    <Link to="/Explorepage" className="explore-button">
      <MdOutlineTravelExplore />
    Explore
    </Link>
  );
};

export default Explore;
