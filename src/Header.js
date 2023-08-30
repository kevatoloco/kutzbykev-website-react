import "./Header.css";
import logo from "./img/newlogo.png";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
function Header() {
  return (
    <>
      <section class="header">
        <nav>
          <div class="nav__links">
            <i class="fa fa-times" onclick="hideMenu()"></i>
            <ul>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>

              <li>
                <a href="gallery.html">About</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <Link to="/GalleryPage" target="_blank">
                  Gallery
                </Link>
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
    </>
  );
}

export default Header;
