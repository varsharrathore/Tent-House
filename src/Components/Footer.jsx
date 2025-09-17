import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import styles from "../Styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={`${styles.footer} bg-dark text-white-50 py-2`}>
        <div className="container">
          <div className="row row-cols-2">
            <div className="col-md-3">
              <h5>
                <img
        src="/logo.png"
        alt="Vintage Tent Logo"
        style={{ height: "22px", marginRight: "10px" }}
      />
                Vintage Tent</h5>
              <ul>
                <li><Link className="text text-decoration-none text-white-50" to="/">Home</Link></li>
                <li><Link className="text text-decoration-none text-white-50" to="/Gallery">Gallery</Link></li>
                <li><Link className="text text-decoration-none text-white-50" to="/Book">Our Services</Link></li>
                <li><Link className="text text-decoration-none text-white-50" to="/Faq">FAQ</Link></li>
              </ul>
            </div>

            <div className="col-md-3">
              <h5>Events</h5>
              <ul>
                <li><Link className="text text-decoration-none text-white-50" to="/Services">Wedding</Link></li>
                <li><Link className="text text-decoration-none text-white-50" to="/Services">Festivals</Link></li>
                <li><Link className="text text-decoration-none text-white-50" to="/Services">Birthday Party</Link></li>
                <li><Link className="text text-decoration-none text-white-50" to="/Services">else here</Link></li>
              </ul>
            </div>

            <div className="col-md-3">
              <h4>Social Media</h4>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faFacebook} className={styles.faFacebook} />
                  <Link className="text text-decoration-none text-white-50" to="#"> Facebook</Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faInstagram} className={styles.faInstagram} />
                  <Link className="text text-decoration-none text-white-50" to="#"> Instagram</Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faTwitter} className={styles.faTwitter} />
                  <Link className="text text-decoration-none text-white-50" to="#"> Twitter</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h5>Contact Us</h5>
              <p><FontAwesomeIcon icon={faPhone} className={styles.faPhone} /> Tele:</p>
              <p><FontAwesomeIcon icon={faEnvelope} className={styles.faEnvelope} /> Email: contact@example.com</p>
              <p><FontAwesomeIcon icon={faLocationDot} className={styles.faLocationDot} /> Address: 123 Main St, Vancover, Canada,123456</p>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright bg-black text-warning-emphasis text-center" style={{ padding: "0px" }}>
        <p style={{ margin: "0" }}>
          &copy; 2025 Vintage Tent Rentals.Ltd | Website Designed by Varsha Rrathore
        </p>
      </div>
    </>
  );
};

export default Footer;
