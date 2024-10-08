"use client";
import Image from "next/image";
import "../style/component/navbar.css";
import {
  faBookmark,
  faBell,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import LinksSection from "./CustDropdown";
import { useContext, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import AuthPopUpModel from "./popUpModel/AuthPopUpModel";

const icons = [faBookmark, faBell, faCartShopping];

const Navbar = () => {
  const { isLogIn, setIsLogIn, SetIsPopUp, isPopUp } = useContext(AuthContext);

  useEffect(() => {}, [isLogIn]);

  return (
    <div
      className={`navbar-container d-flex justify-content-between ${
        !isPopUp ? "fixed-top" : ""
      }`}
    >
      <nav className="navbar navbar-expand-lg bg-light w-100">
        <div className="container-fluid">
          <Image
            className="m-2"
            src="/pageLogo.png"
            alt="pageLogo"
            height={75}
            width={200}
            style={{ objectFit: "contain" }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse align-items-center justify-content-around"
            id="navbarSupportedContent"
            style={{ gap: "20px" }}
          >
            <form className="d-flex flex-1" role="search">
              <input
                className="form-control"
                style={{
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  minWidth: "fit-content",
                }}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                style={{
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  backgroundColor: "#8064A2",
                }}
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#fff"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </form>
            <LinksSection />
            <ul className="navbar-nav mb-2 mb-lg-0 ">
              <div className="d-flex icon-item">
                {icons.map((item, index) => (
                  <li className="nav-item me-4" key={index}>
                    <Link href="#">
                      <FontAwesomeIcon
                        icon={item}
                        style={{ color: "#8064A2", minWidth: "fit-content" }}
                      />
                    </Link>
                  </li>
                ))}
              </div>
            </ul>
            <div className="btn-wrapper">
              {!isLogIn ? (
                <>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={() => SetIsPopUp(true)}
                  >
                    Sign In
                  </button>

                  <div
                    class="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <Image
                            src="/PopUpLogo.png"
                            alt=""
                            height={50}
                            width={50}
                          />
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => SetIsPopUp(false)}
                          ></button>
                        </div>
                        <AuthPopUpModel />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => setIsLogIn(false)}
                >
                  Log Out
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
