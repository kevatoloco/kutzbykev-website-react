import "./Contact.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Contact() {
  return (
    <div className="contact">
      <div class="row">
        <section class="location">
          <div className="circle-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6417.623121634701!2d-117.92310443302313!3d33.754097947013676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd87143cd7d07%3A0xf9d8f4f7566f42df!2sN%20Bewley%20St%2C%20Santa%20Ana%2C%20CA%2092703!5e0!3m2!1sen!2sus!4v1660448845085!5m2!1sen!2sus"
              width="650"
              height="500"
              style={{ border: "0", filter: "grayscale(40%)" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <div class="contact-col">
          <div className="contact-header">
            <h1>Get In Touch</h1>
            <InstagramIcon />
            <MailOutlineIcon />
            <p>KutzByKevSD@gmail.com</p>
          </div>
          <p>714-277-7696</p>

          <form className="form">
            <p>
              Full Name <span style={{ color: "#790000" }}>*</span>
            </p>
            <input type="text" name="name" required />
            <p>
              Email Address <span style={{ color: "#790000" }}>*</span>
            </p>
            <input type="email" name="email" required />
            <p>
              Message <span style={{ color: "#790000" }}>*</span>
            </p>
            <textarea rows="8" name="message" required></textarea>
            <button type="submit" class="button-58">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
