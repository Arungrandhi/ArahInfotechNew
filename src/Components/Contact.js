import React from "react";

import Aurora from './React-bits/Aurora';
import Particles from './React-bits/Particles';



const Contact = () => {
  return (
    <div className="container-fluid  py-0">
      <div style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              backgroundColor: 'black',
                              zIndex: 0, // make sure it's behind content
                          }}>
                              <Aurora
                                  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                                  blend={0.5}
                                  amplitude={1.0}
                                  speed={0.5}
                              />
                          </div>
                          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
              <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
              />
              </div>
      <h1 className="text-center p-3 fw-bold animate__animated animate__fadeIn" style={{ color: "#004aad" }}>Contact Us</h1>

      <div className="row g-4">
        {/* Left Side - Contact Form */}

        <div className="col-md-6">
            <div className="card shadow rounded-3 p-4 contact-card hover-shadow ">
              <h3 className="mb-4 text-dark">Get in Touch</h3>
              <form id="contactForm">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" name="name" className="form-control" placeholder="Enter your name" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Mobile Number</label>
                  <input type="text" name="mobile" className="form-control" placeholder="Enter your Mobile Number" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea name="message" className="form-control" rows="4" placeholder="Write your message..." required></textarea>
                </div>
                <button type="submit" className="btn btn-success w-100 btn-hover">
                  Send Message
                </button>
              </form>
            </div>
    
        </div>


        {/* Right Side - Contact Info with Map */}
        <div className="col-md-6 d-flex flex-column gap-3">
          <div className="card p-3 shadow d-flex flex-row align-items-center gap-3 contact-card hover-shadow">
            <span className="fs-3 text-success">📞</span>
            <div>
              <h5>Phone</h5>
              <a href="tel:+91 89198 01095" className="text-decoration-none text-dark">
                +91 89198 01095
              </a>
            </div>
          </div>

          <div className="card p-3 shadow d-flex flex-row align-items-center gap-3 contact-card hover-shadow">
            <span className="fs-3 text-success">📧</span>
            <div>
              <h5>Email</h5>
              <a href="mailto:ops@arahinfotech.net" className="text-decoration-none text-dark">
                ops@arahinfotech.net
              </a>
            </div>
          </div>

          <div className="card p-3 shadow contact-card hover-shadow">
            <div className="d-flex flex-row align-items-center gap-3 mb-3">
              <span className="fs-3 text-success">📍</span>
              <div>
                <h5>Address</h5>
                <p className="mb-0">123 Market Street, Hyderabad</p>
              </div>
            </div>
            {/* Google Map Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2809740179882!2d78.38955227369082!3d17.446260901109376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ac7d2a35b3%3A0xe30b8afc58d1c9ef!2sArah%20Infotech!5e0!3m2!1sen!2sin!4v1762363933576!5m2!1sen!2sin"
              title="error"
              width="100%"
              height="200"
              style={{ border: 0, transition: "transform 0.3s" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded shadow map-hover"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
