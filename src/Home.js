import CuratorWidget from "./CuratorWidget";
import "./Home.css";
import logo from "./img/newlogo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Contact from "./Contact";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Services from "./Services";

function Home() {
  return (
    <>
      <div className="home">
        <section class="header">
          <nav>
            <div class="nav__links">
              <i class="fa fa-times" onclick="hideMenu()"></i>
              <ul>
                <img src={logo} alt="" />

                <li>
                  <a href="gallery.html">About</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="gallery.html">Gallery</a>
                </li>
                <li>
                  <Link
                    to="https://squareup.com/appointments/book/k2gva624b17ej5/LYSS7VNAD81TC/start"
                    target="_blank"
                  >
                    <a>Book An Appointment</a>
                  </Link>
                </li>
              </ul>
            </div>
            <i class="fa fa-bars" onclick="showMenu()"></i>
            <i class="fa fa-scissors"></i>
          </nav>
        </section>
        <div class="text-box"></div>
        <div className="info-box">
          <div className="icon-text">
            <LocationOnIcon />
            <h3>GARDEN GROVE, CA</h3>
          </div>
          <div className="icon-text">
            <EventAvailableIcon />
            <Link
              to="https://squareup.com/appointments/book/k2gva624b17ej5/LYSS7VNAD81TC/start"
              target="_blank"
            >
              <h3>BOOK AN APPOINTMENT</h3>
            </Link>
          </div>
          <div className="icon-text">
            <AttachMoneyIcon />
            <h3>ALL SERVICES ARE $20</h3>
          </div>
        </div>
        <div class="about">
          <section class="home-about">
            <div class="home-about-textbox">
              <h1>The Vibe</h1>
              <p>
                Hey, hey! Kevin here, and this is KutzByKev – just me, your
                go-to barber! I'm all about shaking things up and making your
                hair and grooming experience totally unique. My goal? To help
                you rock your individual style like never before. I am a very
                passionate and detailed barber that is always practicing the
                latest trends and tricks. Think of me as your modern-day barber
                with a sprinkle of old-school. I want to ditch the ordinary
                barber routine and create a comfortable, laid-back, and
                seriously enjoyable time that's all about you! Let's team up and
                bring out your best self – no stress here, just good times and
                great cuts!
              </p>
            </div>
          </section>
          <section class="home-about-2">
            <div class="home-about-textbox-2">
              <h1>About Me</h1>
              <p>
                Orange County is my hometown, and I graduated in computer
                science from UCSD. I'm a friendly and laid-back person who loves
                making new connections. I've been honing my barbering skills for
                6 years and counting. Beyond the chair, I enjoy gaming,
                basketball, dance, and coding. My barber journey began when I
                tried saving money for college by learning to cut my own hair
                from YouTube. Let's just say my first attempts were hilariously
                bad! Experimenting on friends and cousins, I discovered my
                talent for cutting hair. It's more than just haircuts – I find
                joy in boosting people's confidence to pursue their aspirations
                and listening to their unique stories.
              </p>
            </div>
          </section>
        </div>

        <div className="gallery">
          <CuratorWidget feedId="3618d5f9-000e-448a-bd8b-9c702e4f83de" />
          <div className="gallery-buttons">
            <button class="button-58" role="button">
              VIEW FULL GALLERY
            </button>
          </div>
        </div>
        <Services />

        {/*<!--Contact--> */}
        <Contact />

        <Footer />
      </div>
    </>
  );
}

export default Home;
