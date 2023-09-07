import "./Footer.css";
import logo from "./img/newlogo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import FacebookIcon from "@mui/icons-material/Facebook";
import { HashLink as Link } from "react-router-hash-link";
import React, { useState } from "react";

function Footer() {
  const [isEmailShown, setEmailIsShown] = useState(false);
  const [isPhoneShown, setPhoneIsShown] = useState(false);

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <Link className="footer-text" smooth to="#home">
            <h3>Home</h3>
          </Link>
          <Link className="footer-text" smooth to="#about">
            <h3>About</h3>
          </Link>
          <Link className="footer-text" smooth to="#services">
            <h3>Services</h3>
          </Link>
        </div>
        <div className="footer-middle">
          <img src={logo} />
          <div className="footer-icons">
            <Link
              className="footer-icon-link"
              smooth
              to="https://www.instagram.com/kutz_bykev/"
              target="_blank"
            >
              <InstagramIcon />
            </Link>
            <Link
              className="footer-icon-link"
              smooth
              to="https://www.facebook.com/profile.php?id=100069703561626"
              target="_blank"
            >
              <FacebookIcon />
            </Link>

            <MailOutlineIcon
              onMouseEnter={() => setEmailIsShown(true)}
              onMouseLeave={() => setEmailIsShown(false)}
            />

            <PhoneEnabledIcon
              onMouseEnter={() => setPhoneIsShown(true)}
              onMouseLeave={() => setPhoneIsShown(false)}
            />
          </div>
          {isEmailShown && (
            <p
              style={{
                color: "white",
                textAlign: "center",
                position: "absolute",
                left: "42.5%",
                paddingTop: "7px",
                color: "#d3ae36",
              }}
            >
              KutzByKevSD@gmail.com
            </p>
          )}
          {isPhoneShown && (
            <p
              style={{
                color: "white",
                textAlign: "center",
                position: "absolute",
                left: "46%",
                paddingTop: "7px",
                color: "#d3ae36",
              }}
            >
              714-277-7696
            </p>
          )}
        </div>
        <div className="footer-right">
          <Link
            className="footer-text"
            smooth
            to="/GalleryPage"
            target="_blank"
          >
            <h3>Gallery</h3>
          </Link>
          <Link className="footer-text" smooth to="#contact">
            <h3>Contact</h3>
          </Link>
          <Link
            className="footer-text"
            smooth
            to="https://squareup.com/appointments/book/k2gva624b17ej5/LYSS7VNAD81TC/start"
            target="_blank"
          >
            <h3>Book An Appointment</h3>
          </Link>
        </div>
      </div>
      <div className="footer-bot">
        <hr />
        <p>© 2023 KutzbyKev. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
