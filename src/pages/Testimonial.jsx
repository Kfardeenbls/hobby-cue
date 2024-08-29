import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="d-flex mobile-margin" style={{ margin: "100px" }}>
      <div className="card " style={{ padding: "40px" }}>
        <div className="card-body mobile-view-card-item-center">
          <div className="d-flex align-items-center mb-4">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              style={{
                color: "#8064A2",
                fontSize: "2rem",
                marginRight: "1rem",
              }}
            />
            <h5 className="card-title ">Testimonials</h5>
          </div>
          <p className="card-text mb-4">
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </p>
          <div
            className="d-flex mb3"
            style={{
              gap: "30px",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="d-flex"
              style={{
                flex: "1 1 0%",
                margin: "auto",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px 15px",
                backgroundColor: "#CCC1DA",
                borderRadius: "6px",
                minWidth: "300px",
              }}
            >
              <div className="audio-player " style={{ flex: "1" }}>
                <audio id="music" preload="true">
                  <source src="#" />
                </audio>
                <div id="audioplayer">
                  <FontAwesomeIcon
                    id="pButton"
                    icon={faPlay}
                    className="fas fa-play"
                  />
                  <div id="timeline">
                    <div id="playhead"></div>
                  </div>
                </div>
              </div>
              <div
                className="img-wrapper relative"
                style={{
                  overflow: "hidden",
                  borderRadius: "50%",
                  height: "50px",
                  width: "50px",
                }}
              >
                <Image
                  src="/audio.png"
                  alt=""
                  fill
                  style={{ position: "absolute", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="user-details d-flex" style={{ gap: "20px" }}>
              <div
                className="img-wrapper relative"
                style={{
                  overflow: "hidden",
                  borderRadius: "50%",
                  height: "75px",
                  width: "75px",
                }}
              >
                <Image
                  src="/audio.png"
                  alt=""
                  fill
                  style={{ position: "absolute", objectFit: "cover" }}
                />
              </div>
              <div
                className="d-flex"
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ margin: "unset" }}>Shubha Nagarajan</p>
                <span style={{ color: "#0096C8" }}>Classical Dancer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
