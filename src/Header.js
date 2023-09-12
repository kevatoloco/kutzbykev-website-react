import "./Header.css";
import logo from "./img/newlogo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [color, setColor] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const changeColorAndLogo = () => {
    var Logo = document.getElementById("Logo");
    var navMenu = document.getElementById("navMenu");

    if (window.scrollY >= 120) {
      setColor(true);
      Logo.style.width = "115px";
      Logo.style.height = "90px";
    } else {
      setColor(false);
      Logo.style.width = "160px";
      Logo.style.height = "135px";
      navMenu.style.top = "159px";
    }
  };

  window.addEventListener("scroll", changeColorAndLogo);

  return (
    <>
      <section class="header" id="home">
        <nav>
          <div class={color ? `nav__links nav-bg` : `nav__links`}>
            <a>
              <Link smooth to="/#home">
                <img src={logo} alt="" id="Logo" />
              </Link>
            </a>
            <div
              className={isNavExpanded ? "nav-right expanded " : "nav-right"}
              id="navMenu"
            >
              <a>
                <Link smooth to="#home">
                  Home
                </Link>
              </a>
              <a>
                <Link smooth to="#about">
                  About
                </Link>
              </a>
              <a>
                <Link smooth to="#services">
                  Services
                </Link>
              </a>
              <a>
                <Link to="/GalleryPage" target="_blank">
                  Gallery
                </Link>
              </a>
              <a>
                <Link smooth to="#contact">
                  Contact
                </Link>
              </a>
              <a>
                <Link
                  className="nav-button"
                  to="https://squareup.com/appointments/book/k2gva624b17ej5/LYSS7VNAD81TC/start"
                  target="_blank"
                >
                  <p>Book An Appointment</p>
                </Link>
              </a>
            </div>

            <MenuIcon
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            />
          </div>
        </nav>
      </section>
      <div className="info-box">
        <div className="icon-text">
          <LocationOnIcon />
          <h3>GARDEN GROVE, CA</h3>
        </div>
        <div className="icon-text">
          <EventAvailableIcon />
          <a>
            <Link
              className="icon-text-book"
              to="https://squareup.com/appointments/book/k2gva624b17ej5/LYSS7VNAD81TC/start"
              target="_blank"
            >
              <h3>BOOK AN APPOINTMENT</h3>
            </Link>
          </a>
        </div>
        <div className="icon-text">
          <AttachMoneyIcon />
          <h3>ALL SERVICES ARE $20</h3>
        </div>
      </div>
    </>
  );
}

export default Header;
