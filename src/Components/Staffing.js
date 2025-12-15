import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import recru from './Assects/recruitment.jpg'
import contract from './Assects/contract.jpg'
import leader from './Assects/leadership.jpg'


const Staffing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="staffing-page">
      {/* Background mesh animation */}
      <div className="background-designn"></div>

      {/* Hero Section */}
      <section className="staffing-hero container text-center py-5" data-aos="fade-up">
        <h1 className="display-5 fw-bold text-primary">Best Staffing Industry in Hyderabad</h1>
        <p className="lead text-dark mx-auto mt-3">
          Why Us? We believe in building seamless sourcing processes to address the needs of our clients has undoubtedly given us the recognition beyond one’s expectations constantly delivering Quality and Speed. Arah Infotech is a leader in providing talent solutions to IT and non-IT sectors. We have been partnering with organizations to increase the quality and speed of recruitment by providing high-performing and highly skilled talent for niche roles. Our deep industry acumen combined with a wide talent pool of high caliber professional enables us to find the right match between skills, roles and culture.
        </p>
      </section>

      {/* Main Content Sections */}
      <div className="container my-5">
        <div className="row align-items-center mb-5" data-aos="fade-right">
          <div className="col-md-6">
            <h2 className="fw-bold display-7 text-primary">Recruitment & Workforce Optimization</h2>
            <p className="text-muted mt-3">
              Our staffing solutions streamline recruitment, helping you find the right people for
              the right roles. We focus on efficiency, diversity, and long-term alignment with your
              company’s vision.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={recru}
              className="img-fluid rounded shadow-lg hover-zoom"
              alt="Recruitment"
              style={{height:350, width:650}}
            />
          </div>
        </div>

        <div className="row align-items-center mb-5 flex-md-row-reverse" data-aos="fade-left">
          <div className="col-md-6">
            <h2 className="fw-bold display-7 text-primary">Temporary & Contract Staffing</h2>
            <p className="text-muted mt-3">
              We provide flexible workforce solutions to manage demand fluctuations. Get access to
              trained professionals ready to contribute from day one.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={contract}
              className="img-fluid rounded shadow-lg hover-zoom"
              alt="Contract Staffing"
            />
          </div>
        </div>

        <div className="row align-items-center mb-5" data-aos="fade-right">
          <div className="col-md-6">
            <h2 className="fw-bold display-7 text-primary">Executive Search & Leadership Hiring</h2>
            <p className="text-muted mt-3">
              From senior management to specialized roles, we identify and engage leaders who bring
              vision, innovation, and impact to your organization.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={leader}
              className="img-fluid rounded shadow-lg hover-zoom"
              alt="Leadership Hiring"
              style={{height:350, width:650}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staffing;

