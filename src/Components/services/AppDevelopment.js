import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import appdev from '../Assects/appdev.jpg'
import cross from '../Assects/cross.jpg'
import appmain from '../Assects/appdev2.jpg'
import uiux from '../Assects/uiux.jpg'

import { NavLink } from "react-router-dom";

const AppDevelopment = () => {
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
              Transforming Ideas into Mobile Experiences
            </h1>
            <p className="lead text-white">
              From startups to enterprises, we build mobile apps that scale,
              perform, and inspire. Our app development team combines innovation
              and precision to deliver seamless user experiences across
              platforms.
            </p>
            <button className="btn btn-primary mt-3 px-4 py-2">Join Us</button>
          </div>

          <div className="col-md-6 text-center" data-aos="fade-left">
            <img src={appdev} alt="App Development" className="img-fluid rounded-4 image-hover" />
          </div>
        </div>
      </section>

      {/* Cross-Platform Section */}
      <section className="py-5 bg-light bgradient">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center" data-aos="fade-right">
              <img src={cross} alt="Cross Platform" className="img-fluid rounded-4 image-hover" 
               style={{ width: "420px", height: "280px", objectFit: "cover" }} />
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <h2 className="fw-bold text-hover">Cross-Platform Development</h2>
              <p>
                Build once, deploy everywhere. Our Flutter and React Native apps
                offer consistent performance across iOS, Android, and web —
                saving time and cost without compromising quality.
              </p>
              <button className="btn btn-outline-primary mt-3">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* UI Design Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6 text-center" data-aos="fade-left">
              <img src={uiux} alt="App UI" className="img-fluid rounded-4 image-hover" />
            </div>
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="fw-bold text-hover text-primary">Intuitive UI/UX Design</h2>
              <p className="text-white">
                A great app is more than code — it’s an experience. Our designers
                create elegant, responsive interfaces that users love to
                interact with every day.
              </p>
              <button className="btn btn-outline-primary mt-3">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center" data-aos="fade-right">
              <img src={appmain} alt="App Maintenance" className="img-fluid rounded-4 image-hover " 
              style={{ width: "420px", height: "280px", objectFit: "cover" }} />
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <h2 className="fw-bold text-hover">Support & Maintenance</h2>
              <p>
                We provide long-term maintenance and feature updates, ensuring
                your app remains secure, efficient, and ready for the next
                evolution in mobile technology.
              </p>
              <button className="btn btn-outline-primary mt-3">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-center py-5" data-aos="zoom-in-up">
        <h2 className="fw-bold mb-3 text-white">
          Let's build your next big app idea together.
        </h2>
        <NavLink to="/contact">
          <button className="btn btn-light px-4 py-2">Contact Us</button>
        </NavLink>
      </section>
    </div>
  );
};

export default AppDevelopment;
