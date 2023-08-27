"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DropdownMenu = ({ icons, outerItem, dropdownItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" onClick={toggleDropdown} style={{width:"fit-content", margin:"0 auto"}}>
      <button
        className="btn dropdown-toggle"
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        {icons && <FontAwesomeIcon icon={icons} style={{color: "#8064A2" , margin :"0 10px"}}/>}

        {outerItem}
      </button>
      {isOpen && (
        <ul className="dropdown-menu show at-mobile">
          {dropdownItem.map((item, index) => (
            <li key={index}>
              <Link className="dropdown-item" href="#" onClick={toggleDropdown}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
