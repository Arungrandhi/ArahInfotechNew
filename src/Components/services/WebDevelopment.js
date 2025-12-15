import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import webdev from '../Assects/webdev.jpg'
import uiux from '../Assects/uiux.jpg'
import frontend from '../Assects/frontend.jpg'
import seo from '../Assects/seo.jpg'

import { NavLink } from "react-router-dom";

const WebDevelopment= () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="software-dev-page">
      <div className="background-design"></div>

      {/* Hero Section */}
      <section className="hero-section container py-5">
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <h1 className="fw-bold mb-3 text-primary">
              Creating Exceptional Web Experiences
            </h1>
            <p className="lead text-white">
              We craft responsive, secure, and visually appealing websites that
              tell your brand story and drive measurable results. From corporate
              websites to custom web apps, we deliver full-stack solutions built
              for performance and scalability.
            </p>
            <button className="btn btn-primary mt-3 px-4 py-2">Join Us</button>
          </div>

          <div className="col-md-6 text-center" data-aos="fade-left">
            <img src={webdev} alt="Web Development" className="img-fluid rounded-4 image-hover w-75" />
          </div>
        </div>
      </section>

      {/* UI/UX Section */}
      <section className="py-5 bg-light bgradient">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center" data-aos="fade-right">
              <img src={uiux} alt="UI/UX Design" className="img-fluid rounded-4 image-hover" />
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <h2 className="fw-bold text-hover text-primary">UI/UX Design</h2>
              <p>
                We design intuitive and engaging interfaces that enhance user
                experiences. Every element is built to balance aesthetics and
                usability, ensuring visitors stay longer and convert better.
              </p>
              <button className="btn btn-outline-primary mt-3">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Frontend Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6 text-center" data-aos="fade-left">
              <img src={frontend} alt="Frontend Development" className="img-fluid rounded-4 image-hover" />
            </div>
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="fw-bold text-hover text-primary">Frontend Development</h2>
              <p className="text-white">
                Using modern technologies like React, Vue, and Angular, we build
                lightning-fast interfaces that adapt seamlessly to any device.
                We ensure your website looks beautiful and performs flawlessly.
              </p>
              <button className="btn btn-outline-primary mt-3">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center" data-aos="fade-right">
              <img src={seo} alt="SEO Optimization" className="img-fluid rounded-4 image-hover" />
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <h2 className="fw-bold text-hover text-primary">SEO Optimization</h2>
              <p>
                Boost visibility, improve rankings, and drive traffic with our
                professional SEO and content marketing strategies tailored to
                your brand’s needs.
              </p>
              <button className="btn btn-outline-primary mt-3">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-center py-5" data-aos="zoom-in-up">
        <h2 className="fw-bold mb-3 text-white">
          Let’s develop a website that stands out.
        </h2>
        <NavLink to="/contact">
          <button className="btn btn-light px-4 py-2">Contact Us</button>
        </NavLink>
      </section>
    </div>
  );
};

export default WebDevelopment;
