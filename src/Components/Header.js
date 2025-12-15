import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // keep Bootstrap JS for modal
import { NavLink } from "react-router-dom";
import logo from "./Assects/logo.png";
import ApplyModal from "./ApplyModal";


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [refType, setRefType] = useState(""); // Track dropdown selection
  const navRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when clicking outside (mobile & desktop)
  useEffect(() => {
    const onDocClick = (e) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // NavLink class for active link (react-router v6)
  const linkClass = ({ isActive }) =>
    `nav-item-link ${isActive ? "active-link" : ""}`;

  return (
    <>
      
        {/* page-level dark background (kept global but included here to ensure black bg) */}
        <div className="page-bg" />
        
        <header
          ref={navRef}
          className={`header-wrapper ${scrolled ? "header-scrolled" : ""}`}
          data-aos="fade-down"
        >
           
          <div className="header-inner">
            {/* Brand */}
            <NavLink to="/" className="brand" data-aos="zoom-in">
              <img src={logo} alt="Arah Infotech" className="brand-logo" />
              <h><span className="brand-text"><span className="text-primary">Arah Infotech </span></span></h>
            </NavLink>

            {/* Desktop Links */}
            <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
              <NavLink to="/" className={linkClass} data-aos="fade-up" data-aos-delay="100">
                Home
                <span className="underline" />
              </NavLink>

              <NavLink to="/about" className={linkClass} data-aos="fade-up" data-aos-delay="200">
                About Us
                <span className="underline" />
              </NavLink>

              <NavLink to="/career" className={linkClass} data-aos="fade-up" data-aos-delay="300">
                Careers
                <span className="underline" />
              </NavLink>

              {/* Services (custom dropdown D3) */}
              {/* Services (Click Only Dropdown) */}

              <NavLink to="/services" className={linkClass} data-aos="fade-up" data-aos-delay="300">
                Services
                <span className="underline" />
              </NavLink>


              {/* <div
                className={`services-dropdown ${servicesOpen ? "open" : ""}`}
              >
                <button
                  className="services-btn"
                  onClick={() => setServicesOpen((s) => !s)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services <span className="caret">▾</span>
                </button>

                <div className="services-panel" role="menu">
                  <NavLink to="/softdev" className="services-item" onClick={() => setMenuOpen(false)}>
                    Software Development
                  </NavLink>
                  <NavLink to="/staffing" className="services-item" onClick={() => setMenuOpen(false)}>
                    Staffing
                  </NavLink>
                  <NavLink to="/management" className="services-item" onClick={() => setMenuOpen(false)}>
                    Management
                  </NavLink>
                </div>
              </div> */}



              <NavLink to="/contact" className={linkClass} data-aos="fade-up" data-aos-delay="500">
                Contact Us
                <span className="underline" />
              </NavLink>

              {/* Apply button (keeps triggering your modal) */}
              <button
                className="apply-btn-desktop"
                data-bs-toggle="modal"
                data-bs-target="#applyModal"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                Apply Here
              </button>
            </nav>

            {/* Hamburger (mobile) */}
            <button
              className={`hamburger ${menuOpen ? "is-active" : ""}`}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => {
                setMenuOpen((s) => !s);
                setServicesOpen(false);
              }}
              data-aos="zoom-in"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>

          {/* Mobile slide menu */}
          <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
            <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>
              About Us
            </NavLink>
            <NavLink to="/career" className={linkClass} onClick={() => setMenuOpen(false)}>
              Careers
            </NavLink>

            {/* Mobile Services accordion */}
            <div className="mobile-services">
              <button
                className="mobile-services-btn"
                onClick={() => setServicesOpen((s) => !s)}
                aria-expanded={servicesOpen}
              >
                Services <span className="caret">▾</span>
              </button>

              <div className={`mobile-services-panel ${servicesOpen ? "open" : ""}`}>
                <NavLink to="/softdev" onClick={() => setMenuOpen(false)}>Software Development</NavLink>
                <NavLink to="/staffing" onClick={() => setMenuOpen(false)}>Staffing</NavLink>
                <NavLink to="/management" onClick={() => setMenuOpen(false)}>Management</NavLink>
              </div>
            </div>

            <NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>
              Contact Us
            </NavLink>

            <button
              className="apply-btn-mobile"
              data-bs-toggle="modal"
              data-bs-target="#applyModal"
              onClick={() => setMenuOpen(false)}
            >
              Apply Here
            </button>
          </div>
        </header>
       


       <ApplyModal />
      </>
      );
};

      export default Header;
