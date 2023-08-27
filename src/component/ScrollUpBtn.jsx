"use client";
import React, { useState, useEffect } from "react";
import "../style/component/ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // Show button after scrolling down 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <svg
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_1_286)">
        <circle cx="28" cy="20" r="16" />
      </g>
      <path
        d="M34.0067 23.08C34.3333 22.7533 34.3333 22.2266 34.0067 21.9L28.4667 16.36C28.2067 16.1 27.7867 16.1 27.5267 16.36L21.9867 21.9C21.66 22.2266 21.66 22.7533 21.9867 23.08C22.3133 23.4066 22.84 23.4066 23.1667 23.08L28 18.2533L32.8333 23.0866C33.1533 23.4066 33.6867 23.4066 34.0067 23.08Z"
        fill="#939CA3"
      />
      <defs>
        <filter
          id="filter0_dd_1_286"
          x="0"
          y="0"
          width="56"
          height="56"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="6" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.577255 0 0 0 0 0.610719 0 0 0 0 0.64 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_286"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.576471 0 0 0 0 0.611765 0 0 0 0 0.639216 0 0 0 0.36 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_286"
            result="effect2_dropShadow_1_286"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1_286"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ScrollToTopButton;
