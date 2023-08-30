import "./Footer.css";
import logo from "./img/newlogo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h3>ABOUT</h3>
          <h3>GALLERY</h3>
          <h3>SERVICES</h3>
        </div>
        <div className="footer-middle">
          <img src={logo} />
        </div>
        <div className="footer-right">
          <h3>CONTACT</h3>
          <h3>BOOK AN APPOINTMENT</h3>
          <div className="footer-icons">
            <InstagramIcon />
            <MailOutlineIcon />
            <PhoneEnabledIcon />
            <FacebookIcon />
          </div>
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
