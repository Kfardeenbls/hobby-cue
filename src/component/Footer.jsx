"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
  faGooglePlus,
  faYoutube,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import "../style/component/Footer.css";
import SearchBar from "./SearchBar";

const Footer = () => {
  const data = [
    {
      title: "Hobbycue",
      links: ["About Us", "Our Services", "FAQ", "Contact Us"],
    },
    {
      title: "How Do I",
      links: [
        "Sign Up",
        "Add a Listing",
        "Claim Listing",
        "Post a Query",
        "Add a Blog Post",
        "Other Queries",
      ],
    },
    {
      title: "Quick Links",
      links: ["Listings", "Blog Posts", "Shop / Store", "Community"],
    },
    {
      title: "Social Media",
      links: [
        { name: "Facebook", icon: faFacebook },
        { name: "Twitter", icon: faTwitter },
        { name: "Instagram", icon: faInstagram },
        { name: "Pinterest", icon: faPinterest },
        { name: "Google Plus", icon: faGooglePlus },
        { name: "YouTube", icon: faYoutube },
        { name: "Telegram", icon: faTelegram },
      ],
    },
  ];

  return (
    <>
      <div className="footerContainer ">
        {data.map((section, index) => (
          <div key={index} className="section">
            <h4 className="title">{section.title}</h4>
            <ul
              className={`list ${
                section.title === "Social Media" ? "d-flex " : " "
              }`}
              style={
                section.title === "Social Media"
                  ? { gap: "20px", flexWrap: "wrap" }
                  : {}
              }
            >
              {section.links.map((link, idx) => (
                <li key={idx} className="listItem">
                  {typeof link === "string" ? (
                    link
                  ) : (
                    <Link href="#" className="socialLink">
                      <FontAwesomeIcon icon={link.icon} className="icon" />
                    </Link>
                  )}
                </li>
              ))}
              {section.title === "Social Media" && (
                <SearchBar title="Invite Friends" label="Invite" />
              )}
            </ul>
          </div>
        ))}
      </div>
      <div
        className="d-flex "
        style={{
          backgroundColor: "#F7F5F9",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "30px 0px",
        }}
      >
        <p className="copyright">© Purple Cues Private Limited</p>
      </div>
    </>
  );
};

export default Footer;
