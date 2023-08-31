import "./GalleryPage.css";
import logo from "./img/newlogo.png";
import { HashLink as Link } from "react-router-hash-link";
import CuratorWidget from "./CuratorWidget";
import React, { useState } from "react";

import Footer from "./Footer";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function GalleryPage() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 120) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const images = importAll(
    require.context("./img", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="gallery-page" id="GalleryPage">
      <div class="gallery-header">
        <nav>
          <div class={color ? `nav__links nav-bg` : `nav__links`}>
            <a>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </a>
            <div className="nav-right">
              <a>
                <Link smooth to="/">
                  Home
                </Link>
              </a>
              <a>
                <Link smooth to="/#about">
                  About
                </Link>
              </a>

              <a>
                <Link smooth to="/#services">
                  Services
                </Link>
              </a>

              <a>
                <Link to="#GalleryPage" target="_blank">
                  Gallery
                </Link>
              </a>
              <a>
                <Link smooth to="/#contact">
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
          </div>
        </nav>
        <h1>GALLERY</h1>
      </div>

      <div className="gallery-photos">
        <div className="gallery-row">
          <img src={images["andrewyeh.jpg"]} />
          <img src={images["1.jpg"]} />
          <img src={images["2.jpg"]} />
          <img src={images["shave2.jpg"]} />
        </div>
        <div className="gallery-row">
          <img src={images["6.jpg"]} />
          <img src={images["7.jpg"]} />
          <img src={images["8.jpg"]} />
          <img src={images["9.jpg"]} />
        </div>
        <div className="gallery-row">
          <img src={images["10.jpg"]} />
          <img src={images["11.jpg"]} />
          <img src={images["14.jpg"]} />
          <img src={images["shave.png"]} />
        </div>
        <div className="gallery-row">
          <img src={images["16.jpg"]} />
          <img src={images["18.jpg"]} />
          <img src={images["42.jpg"]} />
          <img src={images["midfadenico.png"]} />
        </div>
        <div className="gallery-row">
          <img src={images["21.jpg"]} />
          <img src={images["22.jpg"]} />
          <img src={images["23.jpg"]} />
          <img src={images["24.jpg"]} />
        </div>
        <div className="gallery-row">
          <img src={images["justin.jpg"]} />
          <img src={images["khoi1.jpg"]} />
          <img src={images["nathan.jpg"]} />
          <img src={images["mid-drop.jpg"]} />
        </div>
        <div className="gallery-row">
          <img src={images["27.jpg"]} />
          <img src={images["40.jpg"]} />
          <img src={images["35.jpg"]} />
          <img src={images["ethan.jpg"]} />
        </div>
        <div className="gallery-row">
          <img src={images["30.jpg"]} />
          <img src={images["31.jpg"]} />
          <img src={images["mullet1.jpg"]} />
          <img src={images["midsplit.jpg"]} />
        </div>
        <div className="gallery-row">
          <img src={images["37.jpg"]} />
          <img src={images["38.jpg"]} />
          <img src={images["39.jpg"]} />
          <img src={images["midfade5.jpg"]} />
        </div>
        <div className="gallery-row">
          <img src={images["lowfade1.jpg"]} />
          <img src={images["43.jpg"]} />
          <img src={images["44.jpg"]} />
          <img src={images["midfadeandrew2.png"]} />
        </div>
        <div className="gallery-row">
          <img src={images["46.jpg"]} />
          <img src={images["47.jpg"]} />
          <img src={images["1fadeandrew.jpg"]} />
          <img src={images["1fadecory.png"]} />
        </div>
        <div className="gallery-row">
          <img src={images["1fadewtaper.png"]} />
          <img src={images["alan.png"]} />
          <img src={images["andreww.jpg"]} />
          <img src={images["combover.jpg"]} />
        </div>
        <div className="gallery-row">
          <img src={images["crewcut.jpg"]} />
          <img src={images["devin1.jpg"]} />
          <img src={images["elliot1.jpg"]} />
          <img src={images["12.jpg"]} />
        </div>
        <div className="gallery-row">
          <img src={images["highfade.png"]} />
          <img src={images["fringe.jpg"]} />
          <img src={images["gio.jpg"]} />
          <img src={images["hightapernick.png"]} />
        </div>
        <div className="gallery-row">
          <img src={images["longhairstyle.jpg"]} />
          <img src={images["41.jpg"]} />
          <img src={images["lowfadenimish.png"]} />
          <img src={images["midfadeed.png"]} />
        </div>
      </div>
      <div className="curator-wrapper">
        <CuratorWidget feedId="a5f3bfac-cb5d-4824-8d31-bc0e07d0f0e2" />
      </div>
      <Footer />
    </div>
  );
}

export default GalleryPage;
