import "./Services.css";
import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "./img/alvarome.jpg";
import "./img/meingarage3.jpg";
import mullet from "./img/mullet1.jpg";
import crewcut from "./img/crewcut.jpg";
import slickback from "./img/matt.jpg";
import undercut from "./img/justin.jpg";
import buzzcut from "./img/andrewyeh.jpg";
import quiff from "./img/gio.jpg";
import longhairstyles from "./img/longhairstyle.jpg";
import texturedcrop from "./img/texturedcrop.jpg";
import fringe from "./img/fringe.jpg";
import combover from "./img/midfadealex.png";
import midsplit from "./img/midsplit.jpg";
import sidepart from "./img/combover.jpg";

function Services() {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="services">
        <div className="services-header">
          <div className="services-left">
            <h1>Services</h1>
            <p>
              I offer haircuts at $20 each, with appointments lasting 45 minutes
              to an hour. You'll receive a free, thorough consultation to
              understand you and your hair better before the haircut.
            </p>
            {/*    <p>Here's a list of hairstyles...</p>
            <div class="box">Mullet</div>
            <div class="box">Crew Cut</div>
            <div class="box">Pompadour</div>
            <div class="box">Undercut</div>
            <div class="box">Buzz Cut</div>
            <div class="box">Quiff</div>
            <div class="box">Long Hairstyles</div>
            <div class="box">Textured Crop</div>
            <div class="box">Fringe</div>
            <div class="box">Comb Over</div>
            <div class="box">Mid Split</div>
            <div class="box">Slicked Back</div>
            <div class="box">Side Part</div>
            <p>
              alongside with the variations for the side/back that I can do!
            </p>
            <div class="box">Low Fade</div>
            <div class="box">Mid Fade</div>
            <div class="box">High Fade</div>
            <div class="box">Drop Fade</div>
            <div class="box">Burst Fade</div>
            <div class="box">Low Taper</div>
            <div class="box">Mid Taper</div>
            <div class="box">High Taper</div>
            <div class="box">Taper Fade</div>
            <div class="box">Same-length Shave</div> */}
          </div>

          <div className="slide-container">
            <Slide>
              <div className="each-slide-effect">
                <div
                  style={{
                    backgroundImage:
                      "url(" + require("./img/alvarome.jpg") + ")",
                  }}
                ></div>
              </div>
              <div className="each-slide-effect">
                <div
                  style={{
                    backgroundImage:
                      "url(" + require("./img/meingarage3.jpg") + ")",
                  }}
                ></div>
              </div>
              <div className="each-slide-effect">
                <div
                  style={{
                    backgroundImage:
                      "url(" + require("./img/alvarome.jpg") + ")",
                  }}
                ></div>
              </div>
            </Slide>
          </div>
        </div>
        <div class="wrapper">
          <ul>
            <li>
              <img src={mullet} alt="Mullet" />
              <span>Mullet</span>
              <span>Low Taper</span>
            </li>
            <li>
              <img src={crewcut} alt="Crew Cut" />
              <span>Crew Cut</span>
              <span>High-Mid Fade</span>
            </li>
            <li>
              <img className="slick-back" src={slickback} alt="Slicked Back" />
              <span>Slicked Back</span>
              <span>High-Mid Fade</span>
            </li>
            <li>
              <img src={undercut} alt="Undercut" />
              <span>Undercut</span>
              <span>Low Taper</span>
            </li>

            <li>
              <img src={buzzcut} alt="Buzz Cut" />
              <span>Buzzcut</span>
              <span>High-Mid Fade</span>
            </li>
            <li>
              <img src={quiff} alt="Quiff" />
              <span>Quiff</span>
              <span>High Taper</span>
            </li>
            {showMore && (
              <div>
                <li>
                  <img src={longhairstyles} alt="Long Hairstyles" />
                  <span>Long Hairstyles</span>
                  <span>Same-Length Shave</span>
                </li>
                <li>
                  <img src={texturedcrop} alt="Textured Crop" />
                  <span>Textured Crop</span>
                  <span>Same-Length Shave</span>
                </li>
                <li>
                  <img src={fringe} alt="Fringe" />
                  <span>Fringe</span>
                  <span>Low Drop Fade</span>
                </li>
                <li>
                  <img src={combover} alt="Comb Over" />
                  <span>Comb Over</span>
                  <span>Mid Fade</span>
                </li>
                <li>
                  <img src={midsplit} alt="Mid Split" />
                  <span>Mid Split</span>
                  <span>Mid Taper</span>
                </li>
                <li>
                  <img src={sidepart} alt="Side Part" />
                  <span>Side Part</span>
                  <span>Mid Fade</span>
                </li>
              </div>
            )}
          </ul>
        </div>
        <div className="show-button">
          <a onClick={toggleReadMoreLess}>
            {showMore ? (
              <button class="button-58" role="button">
                SHOW LESS
              </button>
            ) : (
              <button class="button-58" role="button">
                SHOW MORE
              </button>
            )}
          </a>
        </div>
      </div>
    </>
  );
}

export default Services;
