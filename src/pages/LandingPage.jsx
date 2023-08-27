"use client";
import SignIn from "@/component/SignIn";
import "../style/component/landingpage.css";
import { useState } from "react";
import Image from "next/image";
import JoinIn from "@/component/JoinIn";

const LandingPage = () => {
  const [active, setActive] = useState("signIn");
  return (
    <div className="landingPage-container d-flex  ">
      <div className="hero-content d-flex flex-1">
        <div className="left-container d-flex flex-2">
          <div className="content">
            <h1
              className=" fst-italic fs-1 fs-md-1"
              style={{ fontWeight: "700" }}
            >
              Explore your <span style={{ color: "#0096C8" }}>hobby</span> <t />
              or <span style={{ color: "#8064A2" }}>passion</span>
            </h1>
            <br />
            <div className="desc">
              <p>
                Sign-in to interact with a community of fellow hobbyists and an
                eco-system of experts, teachers, suppliers, classes, workshops,
                and places to practice, participate or perform. Your hobby may
                be about visual or performing arts, sports, games, gardening,
                model making, cooking, indoor or outdoor activities…
              </p>
              <p>
                If you are an expert or a seller, you can Add your Listing and
                promote yourself, your students, products, services or events.
                Hop on your hobbyhorse and enjoy the ride.
              </p>
            </div>
          </div>
          <div className="hero-img relative flex-1">
            <Image
              src="/landingImg.png"
              alt="landingImg.png"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="right-container flex-1">
          <div className="selection">
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
      </div>
      <div className="hero-img relative flex-1">
        <Image
          src="/landingImg.png"
          alt="landingImg.png"
          fill
          style={{ objectFit: "scale-down" }}
        />
      </div>
    </div>
  );
};

export default LandingPage;
