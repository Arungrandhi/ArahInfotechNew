import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaMobileAlt,
  FaRobot,
  FaBrain,
  FaCloud,
  FaGlobe,
  FaDatabase,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Aurora from './React-bits/Aurora';
import Particles from './React-bits/Particles';


const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  const services = [
    {
      icon: <FaGlobe />,
      title: "Web Development",
      desc: "Responsive & modern websites for your business.",
      path: "/webdev",
    },
    {
      icon: <FaMobileAlt />,
      title: "App Development",
      desc: "Android & iOS applications with smooth UI/UX.",
      path: "/appdev",
    },
    {
      icon: <FaRobot />,
      title: "Artificial Intelligence",
      desc: "Chatbots, automation & AI-powered systems.",
      path: "/aidev",
    },
    {
      icon: <FaBrain />,
      title: "Machine Learning",
      desc: "Predictive analytics & data-driven intelligence.",
      path: "/mldev",
    },
    {
      icon: <FaDatabase />,
      title: "Deep Learning",
      desc: "Advanced neural-network-based automation.",
      path: "/deeplearning",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Security",
      desc: "Secure cloud infra & advanced cyber protection.",
      path: "/clouddev",
    },
  ];

  return (
    <section className="services-container">
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
      <div className="text-center mb-2 mt-0 pt-0" data-aos="fade-up">
        <h2 className="services-title">Our Services</h2>
        <p className="text-white">Innovative digital solutions for your business growth</p>
      </div>

      <div className="row justify-content-center">
        {services.map((s, i) => (
          <div
            className="col-md-4 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay={i * 150}
            key={i}
          >
            <div className="service-card m-2">
              <div className="service-icon mb-3 w-25 h-25">{s.icon}</div>
              <h5 className="text-primary">{s.title}</h5>
              <p className="text-white">{s.desc}</p>
              <NavLink to={s.path} className="service-btn">Read More</NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
