import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faStar } from '@fortawesome/free-solid-svg-icons'; // Import the icons you are using
import Link from 'next/link';

const dropdownItemData = [
  {
    id: 1,
    name: "Explore",
    icons: faCompass,
    links: ["action 1", "action 2", "action 3", "action 4"],
  },
  {
    id: 2,
    name: "Hobbies",
    icons: faStar,
    links: ["action 1", "action 2", "action 3", "action 4"],
  },
];

const LinksSection = () => {
  return (
    <div className='d-flex flex-1' style={{gap:"20px", justifyContent:"end"}}>
      {dropdownItemData.map((section, index) => (
        <div className="dropdown" key={index}>
          <button
            className="btn btn-secondary dropdown-toggle"
            style={{backgroundColor:"transparent", border:"none", color:"inherit"}}
            type="button"
            id={`dropdownMenuButton${index}`}
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {section.icons && (
              <FontAwesomeIcon
                icon={section.icons}
                style={{ color: "#8064A2", margin: "0 10px" }}
              />
            )}
            {section.name}
          </button>
          <div className="dropdown-menu" aria-labelledby={`dropdownMenuButton${index}`}>
            {section.links.map((link, idx) => (
              <Link className="dropdown-item" href="#" key={idx}>
                {link}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinksSection;
