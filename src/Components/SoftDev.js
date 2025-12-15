import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import appdev from './Assects/appdev.jpg'
import softdev from './Assects/softdev.jpg'
import webdev from './Assects/webdev.jpg'
import seo from './Assects/seo.jpg'
import { NavLink } from "react-router-dom";

const SoftDev = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="software-dev-page">
      {/* --- Rotating Background Design --- */}
      <div className="background-design"></div>

      {/* ---------- Hero Section ---------- */}
      <section className="hero-section container py-5 ">
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <h1 className="fw-bold mb-3 text-primary">
              Building Scalable Solutions for World-Class Problems
            </h1>
            <p className="lead text-white">
              We’re looking for software engineers who want to invent, build,
              and sometimes break things to make them easier, faster, better,
              and more cost-effective. To those who thrive at solving highly
              complex problems and aspire to impact billions globally — come
              build the future with us. Learn, grow, and take pride in knowing
              your work makes the world better.
            </p>
            <button className="btn btn-primary mt-3 px-4 py-2">Join Us</button>
          </div>

          <div className="col-md-6 text-center" data-aos="fade-left">
            <img
              src={softdev}
              alt="Software Development"
              className="img-fluid rounded-4 image-hover"
            />
          </div>
        </div>
      </section>

      {/* ---------- Web Designing Section ---------- */}
      <section className="py-5 bg-light bgradient">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center" data-aos="fade-right">
              <img
                src={webdev}
                alt="Web Designing"
                className="img-fluid rounded-4 image-hover"
              />
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <h2 className="fw-bold text-hover">Web Designing & Development</h2>
              <p>
                We create visually stunning, responsive, and user-friendly web
                experiences tailored to your business needs. From concept to
                deployment, we ensure fast, secure, and scalable websites that
                engage users and deliver results.
              </p>
              <button className="btn btn-outline-primary mt-3">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- App Development Section ---------- */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6 text-center" data-aos="fade-left">
              <img
                src={appdev}
                alt="App Development"
                className="img-fluid rounded-4 image-hover"
              />
            </div>

            <div className="col-md-6" data-aos="fade-right">
              <h2 className="fw-bold text-hover">App Development</h2>
              <p>
                Our expert developers build powerful mobile and web applications
                that blend intuitive design with high performance. We focus on
                usability, speed, and reliability to give your users the best
                experience possible.
              </p>
              <button className="btn btn-outline-primary mt-3">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SEO & Digital Marketing Section ---------- */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center" data-aos="fade-right">
              <img
                src={seo}
                alt="SEO & Marketing"
                className="img-fluid rounded-4 image-hover"
              />
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <h2 className="fw-bold text-hover">SEO & Digital Marketing</h2>
              <p>
                Boost your online presence and attract the right audience with
                our SEO and digital marketing strategies. We help you rank
                higher, generate leads, and build a strong digital identity that
                drives business growth.
              </p>
              <button className="btn btn-outline-primary mt-3">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Call to Action ---------- */}
      <section className="cta-section text-center py-5" data-aos="zoom-in-up">
        <h2 className="fw-bold mb-3 text-white">
          Let’s build something great together.
        </h2>
        <NavLink to="/contact">
          <button className="btn btn-light px-4 py-2">Contact Us</button>
        </NavLink>
        
      </section>
    </div>
  );
};

export default SoftDev;
