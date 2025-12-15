import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ai from '../Assects/ai.jpg'
import ai2 from '../Assects/ai2.jpg'
import ai3 from '../Assects/ai3.jpg'
import ai4 from '../Assects/ai4.jpg'



import { NavLink } from "react-router-dom";

const ArtificialIntelligence = () => {
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
              Empowering Businesses with Artificial Intelligence
            </h1>
            <p className="lead text-white">
              We build AI-driven solutions that help you automate, optimize, and
              innovate. From predictive analytics to intelligent assistants, our
              AI systems are designed to elevate decision-making and efficiency.
            </p>
            <button className="btn btn-primary mt-3 px-4 py-2">Join Us</button>
          </div>

          <div className="col-md-6 text-center" data-aos="fade-left">
            <img src={ai} alt="Artificial Intelligence" className="img-fluid rounded-4 image-hover" />
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section className="py-5 bg-light bgradient">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center" data-aos="fade-right">
              <img src={ai2} alt="Automation" className="img-fluid rounded-4 image-hover" />
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <h2 className="fw-bold text-hover text-primary">Intelligent Automation</h2>
              <p >
                Automate repetitive workflows and boost productivity using
                AI-based systems. Our automation solutions streamline complex
                business processes with accuracy and speed.
              </p>
              <button className="btn btn-outline-primary mt-3">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbots Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6 text-center" data-aos="fade-left">
              <img src={ai3} alt="AI Chatbots" className="img-fluid rounded-4 image-hover" />
            </div>
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="fw-bold text-hover text-primary">Conversational AI</h2>
              <p className="text-white">
                Build chatbots and virtual assistants that offer human-like
                interaction. Enhance customer experience with AI-driven support
                that works 24/7.
              </p>
              <button className="btn btn-outline-primary mt-3">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center" data-aos="fade-right">
              <img src={ai4} alt="Analytics" className="img-fluid rounded-4 image-hover" />
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <h2 className="fw-bold text-hover">AI-Powered Analytics</h2>
              <p>
                Turn raw data into actionable insights. Our AI models analyze
                trends, patterns, and predictions that help businesses grow with
                data-backed decisions.
              </p>
              <button className="btn btn-outline-primary mt-3">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-center py-5" data-aos="zoom-in-up">
        <h2 className="fw-bold mb-3 text-white">
          Harness the power of AI for your business today.
        </h2>
        <NavLink to="/contact">
          <button className="btn btn-light px-4 py-2">Contact Us</button>
        </NavLink>
      </section>
    </div>
  );
};

export default ArtificialIntelligence;
