"use client"
import "../style/pages/featured.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMapMarkerAlt,
  faShoppingCart,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons"; // Import relevant icons
import React, { useState } from "react";
import Link from "next/link";

const Feature = () => {

const [hoveredId, setHoveredId] = useState(null);
  const featureData = [
    {
      id: 1,

      title: "People",
      description:
        "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
      btn_label: "connect",
      icon: faUser, // Use the imported icon
      color : " #8064A2"

    },
    {
      id: 2,

      title: "Place",
      description:
        "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
      btn_label: "Meet up",
      icon: faMapMarkerAlt, // Use the imported icon
      color : " #77933C"
    },
    {
      id: 3,

      title: "Product",
      description:
        "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
      btn_label: "Get it",
      icon: faShoppingCart, // Use the imported icon
      color : " #C0504D"
    },
    {
      id: 4,

      title: "Program",
      description:
        "Find events, meetups, and workshops related to your hobby. Register or buy tickets online.",
      btn_label: "Attend",
      icon: faCalendarAlt, // Use the imported icon
      color : " #0096C8"
    },
  ];

  return (
    <div div className="feature-section d-flex " style={{ flexDirection:"column"}}>
      <div className="d-flex" style={{ margin: "100px", flexWrap:"wrap", justifyContent:"center"}}>
        {featureData.map((item) => (
            <div className="card m-4 "  key={item.id} style={{ minWidth: "300px", maxWidth:"300px" }}>
              <div className="card-body mobile-view-card-item-center"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ border:`1px solid ${item.color}`, backgroundColor: hoveredId === item.id ? item.color : 'transparent',}} >
                <div className="d-flex align-items-center mb-3">
                  <FontAwesomeIcon
                    icon={item.icon}
                    style={{
                      color: "#8064A2",
                      fontSize: "2rem",
                      marginRight: "1rem",
                    }}
                  />
                  <h5 className="card-title mb-0">{item.title}</h5>
                </div>
                <p className="card-text">{item.description}</p>
                <Link
                  href="#"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "transparent",
                    color: "#8064a2",
                    border: "1px solid #8064a2",
                  }}
                >
                  {item?.btn_label}
                </Link>
              </div>
            </div>
        ))}
      </div>
      <div className="add-form d-flex " style={{backgroundColor:"#F7FDFF"}}>
        <div className="card mobile-margin" style={{ margin: "100px", padding:"50px" }}>
          <div className="card-body mobile-view-card-item-center">
            <div className="d-flex align-items-center mb-3" style={{gap:"20px"}}>
              <span>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_34204_426)">
                    <path
                      d="M20.0002 3.33331C10.8002 3.33331 3.3335 10.8 3.3335 20C3.3335 29.2 10.8002 36.6666 20.0002 36.6666C29.2002 36.6666 36.6668 29.2 36.6668 20C36.6668 10.8 29.2002 3.33331 20.0002 3.33331ZM26.6668 21.6666H21.6668V26.6666C21.6668 27.5833 20.9168 28.3333 20.0002 28.3333C19.0835 28.3333 18.3335 27.5833 18.3335 26.6666V21.6666H13.3335C12.4168 21.6666 11.6668 20.9166 11.6668 20C11.6668 19.0833 12.4168 18.3333 13.3335 18.3333H18.3335V13.3333C18.3335 12.4166 19.0835 11.6666 20.0002 11.6666C20.9168 11.6666 21.6668 12.4166 21.6668 13.3333V18.3333H26.6668C27.5835 18.3333 28.3335 19.0833 28.3335 20C28.3335 20.9166 27.5835 21.6666 26.6668 21.6666Z"
                      fill="#0096C8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_34204_426">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h5 className="card-title mb-0">Add your own</h5>
            </div>
            <p className="card-text mb-4">Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
            <Link
              href="#"
              className="btn btn-primary"
              style={{
                backgroundColor: "transparent",
                color: "#8064a2",
                border: "1px solid #8064a2",
              }}
            >
              Add new
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
