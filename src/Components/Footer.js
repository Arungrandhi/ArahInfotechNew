import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import logo from "./Assects/logo.png";

const Footer = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // 👈 current route path

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
    });

    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 Scroll to top only if changing to a different page
  const handleNavClick = (to) => {
    if (location.pathname !== to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer animate__animated animate__fadeInUp">
      <div className="footer-overlay" />
      <div className="footer-content">
        <div className="footer-container">
          {/* About */}
          <div className="footer-about" data-aos="fade-right">
            <div className="d-flex pb-1">
              <img src={logo} alt="Arah Infotech" className="brand-logo" />
              <h2 className="pt-1 text-primary">Arah Infotech</h2>
            </div>
            <p>
              Empowering businesses with cutting-edge technology — web & mobile
              applications, intelligent automation and IT consulting.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links ps-5" data-aos="fade-up" data-aos-delay="80">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className="footer-link"
                  onClick={() => handleNavClick("/")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="footer-link"
                  onClick={() => handleNavClick("/about")}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/career"
                  className="footer-link"
                  onClick={() => handleNavClick("/careers")}
                >
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="footer-link"
                  onClick={() => handleNavClick("/contact")}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-services pe-5" data-aos="fade-up" data-aos-delay="160">
            <h3>Our Services</h3>
            <ul>
              <li>
                <NavLink
                  to="/appdev"
                  className="footer-link"
                  onClick={() => handleNavClick("/appdev")}
                >
                  App Development
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/webdev"
                  className="footer-link"
                  onClick={() => handleNavClick("/webdev")}
                >
                  Web Development
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aidev"
                  className="footer-link"
                  onClick={() => handleNavClick("/aidev")}
                >
                  Artificial Intelligence
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mldev"
                  className="footer-link"
                  onClick={() => handleNavClick("/mldev")}
                >
                  Machine Learning
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/deeplearning"
                  className="footer-link"
                  onClick={() => handleNavClick("/deeplearning")}
                >
                  Deep Learning
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/clouddev"
                  className="footer-link"
                  onClick={() => handleNavClick("/clouddev")}
                >
                  Cloud Security
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact" data-aos="fade-left" data-aos-delay="200">
            <h3>Contact Us</h3>
            <p
              style={{ cursor: "pointer" }}
              onClick={() => window.open(
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104503.57046497233!2d78.28631148949816!3d17.436322580469458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915dba4b9733%3A0xef02f177bfa0f25d!2sShanmukha%20Empires%2C%20Mega%20Hills%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin",
                "_blank"
              )}
            >
              <FaMapMarkerAlt />{" "}
              Ground Floor
              Shanmukha Empires
              83, Ayyappa Society Main Road
              Mega Hills, Madhapur
              Hyderabad, Telangana
              (Beside Raju Gari Biryani)

            </p>

            <p>
              <FaEnvelope />{" "}
              <a href="mailto:ops@arahinfotech.net" className="contact-link">
                ops@arahinfotech.net
              </a>
            </p>
            <p>
              <FaPhoneAlt />{" "}
              <a href="tel:+91 89198 01095" className="contact-link">
                +91 89198 01095
              </a>
            </p>

            <div className="social-icons">
              <a href="https://www.instagram.com/arahinfotechpvtltd?igsh=NHFmc2o2aWV1Y3pl" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/share/1A4YsEwFYy/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom" data-aos="zoom-in-up" data-aos-delay="260">
          <p>© {new Date().getFullYear()} Arah Infotech. All rights reserved.</p>
          <p className="credits">
            Designed and Developed by <strong>Arah Team</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
