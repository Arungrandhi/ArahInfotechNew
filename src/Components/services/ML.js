import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import ml from '../Assects/ml.jpg'
import ml2 from '../Assects/ml2.jpg'
import ml3 from '../Assects/ml3.jpg'
import ml4 from '../Assects/ml4.jpg'

const MachineLearning = () => {
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
              Turning Data into Intelligent Action
            </h1>
            <p className="lead text-white">
              Our machine learning models empower your organization to make
              smarter, faster, and data-driven decisions. We build algorithms
              that adapt, learn, and evolve as your business grows.
            </p>
            <button className="btn btn-primary mt-3 px-4 py-2">Join Us</button>
          </div>

          <div className="col-md-6 text-center" data-aos="fade-left">
            <img src={ml} alt="Machine Learning" className="img-fluid rounded-4 image-hover" />
          </div>
        </div>
      </section>

      {/* Data Modeling */}
      <section className="py-5 bg-light bgradient">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center" data-aos="fade-right">
              <img src={ml2} alt="Data Modeling" className="img-fluid rounded-4 image-hover" />
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <h2 className="fw-bold text-hover">Data Modeling & Training</h2>
              <p>
                We collect, clean, and model data using the latest ML frameworks.
                Our training process ensures accuracy, reliability, and
                scalability.
              </p>
              <button className="btn btn-outline-primary mt-3">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Prediction Systems */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6 text-center" data-aos="fade-left">
              <img src={ml3} alt="Prediction Systems" className="img-fluid rounded-4 image-hover" />
            </div>
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="fw-bold text-hover text-primary">Predictive Intelligence</h2>
              <p className="text-white">
                From sales forecasting to customer behavior analysis, we deliver
                predictive systems that help you stay ahead in decision-making.
              </p>
              <button className="btn btn-outline-primary mt-3">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Visualization */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center" data-aos="fade-right">
              <img src={ml4} alt="Data Visualization" className="img-fluid rounded-4 image-hover" />
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <h2 className="fw-bold text-hover">Data Visualization</h2>
              <p>
                Transform complex data into clear visuals. We build dashboards
                that bring your insights to life and empower teams with clarity.
              </p>
              <button className="btn btn-outline-primary mt-3">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-center py-5" data-aos="zoom-in-up">
        <h2 className="fw-bold mb-3 text-white">
          Make smarter decisions with Machine Learning.
        </h2>
        <NavLink to="/contact">
          <button className="btn btn-light px-4 py-2">Contact Us</button>
        </NavLink>
      </section>
    </div>
  );
};

export default MachineLearning;
