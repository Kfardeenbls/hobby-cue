"use client";
import "../style/component/signIn.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ConnectWith from "./ConnectWith";

const JoinIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="cust-container flex-col revrse" style={{gap:"20px"}}>
      <ConnectWith />
      <form className="credential my-2">
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
        <div class=" d-flex" style={{justifyContent:"space-between", alignItems:"center", marginBottom:"1rem"}}>
          <div className="d-flex" style={{gap:"5px"}}>
            <div style={{height:"5px", borderRadius:"4px", backgroundColor:"#fff", width:"50px"}}></div>
            <div style={{height:"5px", borderRadius:"4px", backgroundColor:"#fff", width:"50px"}}></div>
            <div style={{height:"5px", borderRadius:"4px", backgroundColor:"#fff", width:"50px"}}></div>
          </div>
          <span>Password strength</span>  
        </div>
        <span style={{fontSize:"14px"}}>By continuing, you agree to our <strong>Terms of Service</strong>  and <strong> Privacy Policy</strong>.</span>
        <button type="submit" class="btn btn-primary" style={{backgroundColor:"#8064a2"}}>
          Agree and Continue
        </button>
      </form>
    </div>
  );
};

export default JoinIn;
