"use client";
import "../style/component/signIn.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ConnectWith from "./ConnectWith";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="cust-container flex-col revrse" style={{gap:"20px"}}>
      <ConnectWith />
      <form className="credential">
        <div class="form-group">
          <input
            type="email"
            class="form-control noOutline"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div
          className="input-group"
          id="show_hide_password"
          style={{
            border: "1px solid #dee2e6",
            borderRadius: "0.375rem",
            backgroundColor: "#fff",
            alignItems: "center",
          }}
        >
          <input
            className="form-control noOutline"
            style={{ border: "none" }}
            type={showPassword ? "text" : "password"}
            placeholder="password"
          />
          <div className="input-group-addon me-2">
            <a href="#" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                style={{ color: "#6D747A" }}
              />
            </a>
          </div>
        </div>
        <div class="form-check d-flex" style={{ justifyContent:"space-between", alignItems:"center" ,marginBottom:"1rem"}}>
          <div className="d-flex" style={{ gap: "10px" }}>
            <input
              type="checkbox"
              class="form-check-input "
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Remember me
            </label>
          </div>
          <div className="d-flex" style={{ gap: "10px" ,alignItems:"center"}}>
            <svg
              width="12"
              height="15"
              viewBox="0 0 12 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.81945 5.33334H9.1628V4.00001C9.1628 2.16001 7.69193 0.666672 5.8796 0.666672C4.06727 0.666672 2.59639 2.16001 2.59639 4.00001V5.33334H1.93975C1.21744 5.33334 0.626465 5.93334 0.626465 6.66667V13.3333C0.626465 14.0667 1.21744 14.6667 1.93975 14.6667H9.81945C10.5418 14.6667 11.1327 14.0667 11.1327 13.3333V6.66667C11.1327 5.93334 10.5418 5.33334 9.81945 5.33334ZM5.8796 11.3333C5.15729 11.3333 4.56631 10.7333 4.56631 10C4.56631 9.26667 5.15729 8.66667 5.8796 8.66667C6.6019 8.66667 7.19288 9.26667 7.19288 10C7.19288 10.7333 6.6019 11.3333 5.8796 11.3333ZM3.90967 5.33334V4.00001C3.90967 2.89334 4.78957 2.00001 5.8796 2.00001C6.96962 2.00001 7.84952 2.89334 7.84952 4.00001V5.33334H3.90967Z"
                fill="#939CA3"
              />
            </svg>

            <span>Forgot password?</span>
          </div>
        </div>
        <button type="submit" class="btn btn-primary" style={{backgroundColor:"#8064a2"}}>
          Continue
        </button>
      </form>
    </div>
  );
};

export default SignIn;
