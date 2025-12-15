import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavLink } from "react-router-dom";

import cs from '../Assects/cs.jpg'
import cs2 from '../Assects/cs2.jpg'
import cs3 from '../Assects/cs3.jpg'
import cs4 from '../Assects/cs4.jpg'

const CloudSecurity = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="software-dev-page">
      <div className="background-design"></div>

      {/* Hero Section */}
      <section className="hero-section container py-5 ">
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <h1 className="fw-bold mb-3 text-primary">
              Secure, Scalable & Reliable Cloud Protection
            </h1>
            <p className="lead text-white">
              Safeguard your infrastructure with enterprise-grade cloud security
              solutions. We provide end-to-end protection for your applications,
              networks, and sensitive data.
            </p>
            <button className="btn btn-primary mt-3 px-4 py-2">Join Us</button>
          </div>

          <div className="col-md-6 text-center" data-aos="fade-left">
            <img src={cs} alt="Cloud Security" className="img-fluid rounded-4 image-hover" />
          </div>
        </div>
      </section>

      {/* Encryption */}
      <section className="py-5 bg-light bgradient">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center" data-aos="fade-right">
              <img src={cs2} alt="Data Encryption" className="img-fluid rounded-4 image-hover" />
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <h2 className="fw-bold text-hover">Data Encryption</h2>
              <p>
                Protect sensitive data with cutting-edge encryption algorithms.
                We ensure your files and transactions remain secure at all
                stages of transmission and storage.
              </p>
              <button className="btn btn-outline-primary mt-3">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Firewall */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6 text-center" data-aos="fade-left">
              <img src={cs3} alt="Network Firewall" className="img-fluid rounded-4 image-hover" />
            </div>
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="fw-bold text-hover text-primary">Advanced Firewalls</h2>
              <p className="text-white">
                Monitor and defend your systems with intelligent firewalls
                capable of identifying and blocking real-time threats before
                they impact your business.
              </p>
              <button className="btn btn-outline-primary mt-3">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center" data-aos="fade-right">
              <img src={cs4} alt="Cloud Compliance" className="img-fluid rounded-4 image-hover" />
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <h2 className="fw-bold text-hover">Compliance & Monitoring</h2>
              <p>
                Stay compliant with GDPR, ISO, and other security frameworks.
                Our cloud monitoring tools ensure full visibility into system
                performance and integrity.
              </p>
              <button className="btn btn-outline-primary mt-3">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-center py-5" data-aos="zoom-in-up">
        <h2 className="fw-bold mb-3 text-white">
          Protect your cloud with next-generation security solutions.
        </h2>
        <NavLink to="/contact">
          <button className="btn btn-light px-4 py-2">Contact Us</button>
        </NavLink>
      </section>
    </div>
  );
};

export default CloudSecurity;
