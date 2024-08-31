"use client";
import React, { useState } from "react";
import SignIn from "../SignIn";
import JoinIn from "../JoinIn";

const AuthPopUpModel = () => {
  const [active, setActive] = useState("signIn");

  return (
    <div className="right-container flex-1" style={{ padding: "24px" }}>
      <div
        className="selection d-flex"
        style={{ justifyContent: "center", gap: "10px" }}
      >
        <button
          type="button"
          className={`cust-btn ${active === "signIn" ? "cust-active" : ""}`}
          onClick={() => setActive("signIn")}
        >
          Sign In
        </button>
        <button
          type="button"
          className={`cust-btn ${active === "joinIn" ? "cust-active" : ""}`}
          onClick={() => setActive("joinIn")}
        >
          Join In
        </button>
      </div>
      {active === "signIn" && <SignIn />}
      {active === "joinIn" && <JoinIn />}
    </div>
  );
};

export default AuthPopUpModel;
