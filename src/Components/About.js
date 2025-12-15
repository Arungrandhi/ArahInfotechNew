import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import about from './Assects/about.jpg';
import image1 from './Assects/chris.jpeg';
import image2 from './Assects/kevin.jpeg';
import image3 from './Assects/robert.jpeg';
import Particles from './React-bits/Particles';
import Aurora from './React-bits/Aurora';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="container py-5 text-white">
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

        {/* About + Spline Section */}
        <div className="row align-items-center mb-5 m-0 p-0">
          {/* Left Side - Text */}
          <div className="col-md-6 text-center" data-aos="fade-up">
            <h1 className="fw-bold text-primary ">About Us</h1>
            <p className="fw-bold">
              Arah Infotech is a solitary point IT Staffing and Software solutions provider...
            </p>
            <p className="fw-bold">
              Arah Infotech was started on June 2019 in Hyderabad...
            </p>
            <p className="fw-bold">
              Competitiveness and Quality is what Vagarious brings to its family of clients...
            </p>
            <p className="fw-bold">
              Our collection of competencies starts from Planning, Consulting and Value Analysis...
            </p>
          </div>

          {/* Right Side - Spline Viewer */}
          <div className="col-md-6 d-flex ">
            <div style={{ width: "100%", height: "400px", overflow: "hidden", margin: "10px", position: "relative" }}>
              <spline-viewer
                url="https://prod.spline.design/EktdgsilKcP-PZrw/scene.splinecode"
                style={{
                  width: "100%",
                  height: "600px",
                  transform: "translateY(-40px)",  // Move model up by 150px
                }}
              ></spline-viewer>
            </div>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <img src={about} alt="Software Solutions" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h2 className="fw-semibold mb-3">Who We Are</h2>
            <p>
              At <strong>Arah Infotech</strong>, we are a team of passionate developers, designers, and strategists...
            </p>
            <p>
              With expertise across technologies like React, Flutter, Node.js, and Cloud platforms...
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="row mt-5">
          <div className="col-md-6" data-aos="zoom-in-up">
            <div className="card shadow p-4 border-0 rounded-4 h-100 bg-dark bg-opacity-50 text-white">
              <h3 className="text-primary mb-3">🎯 Our Mission</h3>
              <p>To deliver scalable and intelligent software solutions that accelerate business transformation...</p>
            </div>
          </div>
          <div className="col-md-6" data-aos="zoom-in-up" data-aos-delay="200">
            <div className="card shadow p-4 border-0 rounded-4 h-100 bg-dark bg-opacity-50 text-white">
              <h3 className="text-primary mb-3">🚀 Our Vision</h3>
              <p>To become a trusted global technology partner recognized for creativity and excellence...</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        {/* <div className="mt-5 text-center">
          <h2 className="fw-bold mb-4" data-aos="fade-up">Our Core Team</h2>
          <div className="row justify-content-center">
            {[{ img: image1, name: "Ajay", role: "Full Stack Developer" },
            { img: image2, name: "Navya Dileep", role: "Managing Director" },
            { img: image3, name: "Sanjay", role: "Founder" }].map((member, index) => (
              <div className="col-md-3" data-aos="flip-left" data-aos-delay={index * 150} key={index}>
                <div className="card border-0 shadow-lg rounded-4 p-3 team-card bg-dark bg-opacity-50 text-white">
                  <img src={member.img} alt="Team Member" className="rounded-circle mb-3 team-photo ms-5" />
                  <h5 className="fw-semibold">{member.name}</h5>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        {/* ✅ Clients Section */}
          <div className="clients-section text-center py-5 bg-black" style={{position:"relative"}}>
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
            <h2 className="fw-bold mb-4" data-aos="fade-up">Our Trusted Clients</h2>
            <p className="mb-5 text-white" data-aos="fade-up" data-aos-delay="100">
              We’ve proudly worked with top global brands and technology leaders.
            </p>

            <div className="container">
              <div className="row justify-content-center g-4">
                {[
                  "google.png",
                  "intel.png",
                  "cisco.png",
                  "amazon.png",
                  "samsung.png",
                  "deloitte.png",
                  "sony.png",
                  "oracle.png",
                  "hitachi.png",
                  "ibm.png",
                  "sap.png",
                  "logitech.png",
                ].map((logo, index) => (
                  <div
                    className="col-6 col-md-3 col-lg-2"
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 50}
                  >
                    <div className="client-logo-card p-3 rounded shadow-sm bg-white">
                      <img
                        src={`/clients/clients/${logo}`}
                        alt="Client Logo"
                        className="img-fluid client-logo"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
    </div>

  );
};

export default About;
