import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavLink } from "react-router-dom";

import dl from '../Assects/dl.jpg'
import dl2 from '../Assects/dl2.jpg'
import dl3 from '../Assects/dl3.jpg'
import dl4 from '../Assects/dl4.jpg'

const DeepLearning = () => {
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
              Deep Learning for a Smarter Future
            </h1>
            <p className="lead text-white">
              We harness the power of deep learning to enable vision, language,
              and decision-making capabilities for intelligent systems that
              adapt and improve autonomously.
            </p>
            <button className="btn btn-primary mt-3 px-4 py-2">Join Us</button>
          </div>

          <div className="col-md-6 text-center" data-aos="fade-left">
            <img src={dl} alt="Deep Learning" className="img-fluid rounded-4 image-hover" />
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-5 bg-light bgradient">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center" data-aos="fade-right">
              <img src={dl2} alt="Computer Vision" className="img-fluid rounded-4 image-hover" />
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <h2 className="fw-bold text-hover">Computer Vision</h2>
              <p>
                Build intelligent systems that can detect, recognize, and
                interpret visual information with exceptional precision using CNN
                and object detection networks.
              </p>
              <button className="btn btn-outline-primary mt-3">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* NLP */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6 text-center" data-aos="fade-left">
              <img src={dl3} alt="Natural Language Processing" className="img-fluid rounded-4 image-hover" />
            </div>
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="fw-bold text-hover text-primary">Natural Language Processing</h2>
              <p className="text-white">
                Empower your apps to understand and process human language. Our
                NLP models handle sentiment analysis, chatbots, and translation
                with precision.
              </p>
              <button className="btn btn-outline-primary mt-3">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Automation */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center" data-aos="fade-right">
              <img src={dl4} alt="AI Automation" className="img-fluid rounded-4 image-hover" />
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <h2 className="fw-bold text-hover">Autonomous Systems</h2>
              <p>
                From robotics to autonomous vehicles, we design deep learning
                models capable of making complex real-time decisions safely and
                efficiently.
              </p>
              <button className="btn btn-outline-primary mt-3">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-center py-5" data-aos="zoom-in-up">
        <h2 className="fw-bold mb-3 text-white">
          Experience innovation powered by Deep Learning.
        </h2>
        <NavLink to="/contact">
          <button className="btn btn-light px-4 py-2">Contact Us</button>
        </NavLink>
      </section>
    </div>
  );
};

export default DeepLearning;
