import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Aurora from './React-bits/Aurora';
import Particles from './React-bits/Particles';
import ApplyModal from "./ApplyModal";

const Careers = () => {
  const jobs =
    [
      {
        id: 1,
        title: "Test Automation Developer",
        experience: "1–2 Years",
        location: "Hyderabad, India",
        description:
          "Test automation developers design and write programs that run automatic tests on new or existing software – an essential part of the software development cycle.",
        skills: [
          "Using test automation frameworks",
          "Designing and writing test automation scripts",
          "Managing the testing process",
          "Investigating problems in software as a result of testing",
          "Researching and evaluating new tools",
          "Develop and monitor testing processes",
          "Working with QA analysts and software developers",
          "Reporting on results of testing to clients and colleagues",
        ],
        education:
          "UG: B.Tech/B.E. in Any Specialization, BCA in Any Specialization",
      },
      {
        id: 2,
        title: "ReactJS Developer",
        experience: "1+ Years",
        location: "Remote",
        description:
          "Responsible for building interactive UI components using ReactJS and integrating them with backend APIs.",
        skills: [
          "ReactJS and JavaScript (ES6+)",
          "REST API integration",
          "Responsive web design",
          "Git and version control",
          "Strong debugging and testing skills",
        ],
        education:
          "UG: B.Tech/B.E. in Computer Science or related field, BCA in Any Specialization",
      },
      {
        id: 3,
        title: "Full Stack Developer (MERN)",
        experience: "2–4 Years",
        location: "Bengaluru, India",
        description:
          "Develop and maintain scalable web applications using the MERN stack, from frontend design to backend APIs.",
        skills: [
          "MongoDB, Express.js, ReactJS, Node.js",
          "REST and GraphQL APIs",
          "State management (Redux, Context API)",
          "Authentication and authorization (JWT, OAuth)",
          "Deployment on AWS or Vercel",
        ],
        education: "UG: B.Tech/B.E. in Computer Science or related field",
      },
      {
        id: 4,
        title: "UI/UX Designer",
        experience: "1–3 Years",
        location: "Pune, India",
        description:
          "Create user-centered designs by understanding business requirements, user feedback, and usability metrics.",
        skills: [
          "Figma, Adobe XD, Sketch",
          "Wireframing and prototyping",
          "User research and persona creation",
          "Responsive and mobile-first design",
          "Collaboration with developers",
        ],
        education: "UG: Any Design-related degree or certification",
      },
      {
        id: 5,
        title: "Android Developer (Flutter)",
        experience: "1–2 Years",
        location: "Hyderabad, India",
        description:
          "Build and maintain cross-platform mobile apps using Flutter framework with high performance and clean UI.",
        skills: [
          "Flutter and Dart",
          "Firebase integration",
          "API consumption",
          "State management (Bloc, Provider)",
          "App deployment (Play Store, App Store)",
        ],
        education: "UG: B.Tech/B.E. or MCA",
      },
      {
        id: 6,
        title: "DevOps Engineer",
        experience: "2–5 Years",
        location: "Chennai, India",
        description:
          "Automate and streamline development, testing, and deployment processes using CI/CD pipelines.",
        skills: [
          "AWS, Azure, or GCP",
          "Docker and Kubernetes",
          "CI/CD pipelines (Jenkins, GitHub Actions)",
          "Linux scripting",
          "Monitoring tools (Prometheus, Grafana)",
        ],
        education: "UG: B.Tech/B.E. in Computer Science or IT",
      },
      {
        id: 7,
        title: "Backend Developer (Node.js)",
        experience: "1–3 Years",
        location: "Remote",
        description:
          "Design, develop, and maintain RESTful APIs and microservices using Node.js and Express.",
        skills: [
          "Node.js, Express.js",
          "MongoDB or PostgreSQL",
          "Authentication & Security (JWT, OAuth2)",
          "API documentation (Swagger)",
          "Unit testing and debugging",
        ],
        education: "UG: B.Tech/B.E. in Computer Science or related field",
      },
      {
        id: 8,
        title: "Data Analyst",
        experience: "1–3 Years",
        location: "Bengaluru, India",
        description:
          "Analyze datasets to extract meaningful insights and support decision-making across business functions.",
        skills: [
          "SQL, Excel, Python (Pandas, NumPy)",
          "Data visualization (Power BI, Tableau)",
          "Statistical analysis",
          "Reporting dashboards",
        ],
        education: "UG: B.Sc/B.Tech in Data Science or Statistics",
      },
      {
        id: 9,
        title: "Cybersecurity Analyst",
        experience: "2–4 Years",
        location: "Noida, India",
        description:
          "Monitor, detect, and respond to security threats and vulnerabilities across systems and networks.",
        skills: [
          "Network security and firewalls",
          "Penetration testing tools",
          "Incident response",
          "Security auditing and compliance",
        ],
        education: "UG: B.Tech/B.E. in Information Security or Computer Science",
      },
      {
        id: 10,
        title: "Cloud Engineer",
        experience: "1–3 Years",
        location: "Pune, India",
        description:
          "Implement and manage cloud infrastructure services using AWS, Azure, or Google Cloud.",
        skills: [
          "Cloud infrastructure setup",
          "Serverless architecture",
          "Terraform or CloudFormation",
          "Monitoring and optimization",
        ],
        education: "UG: B.Tech/B.E. in Computer Science or IT",
      }
    ]
  // const [activeTab, setActiveTab] = useState("IT");
  const [selectedJob, setSelectedJob] = useState(null);
  const [refType, setRefType] = useState("");


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);




  return (
    <>
      <div className=" py-5">

        <div className="container">
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

          <h1
            className="text-center fw-bold mb-4"
            data-aos="fade-down"
            style={{ color: "#004aad" }}
          >
            Careers at Arah Infotech
          </h1>

          {/* Job Cards */}
          <div className="row g-4">
            {jobs.map((job, index) => (
              <div
                className="col-md-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={job.id}
              >
                <div className="career-card shadow-lg p-4 rounded-4 h-100">
                  <h4 className="fw-bold text-primary mb-2">{job.title}</h4>
                  <p className="mb-1 text-white">
                    <i className="bi bi-geo-alt "></i>Location: {job.location}
                  </p>
                  <p className=" mb-2 text-white">
                    <i className="bi bi-clock"></i>Experience: {job.experience}
                  </p>
                  <div className="mt-3">
                    <button
                      className="btn btn-outline-primary me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#jobDetailsModal"
                      onClick={() => setSelectedJob(job)}
                    >
                      View Details
                    </button>
                    <button
                      className="btn btn-gradient"
                      data-bs-toggle="modal"
                      data-bs-target="#applyModal"
                    >
                      Apply Here
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Details Modal */}
      <div
        className="modal fade"
        id="jobDetailsModal"
        tabIndex="-1"
        aria-labelledby="jobDetailsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            {selectedJob && (
              <>
                <div className="modal-header">
                  <h5 className="modal-title">{selectedJob.title}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>{selectedJob.description}</p>
                  <h6 className="fw-bold mt-3">
                    Required Knowledge, Skills, and Abilities
                  </h6>
                  <ul>
                    {selectedJob.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                  <h6 className="fw-bold mt-3">Education + Experience</h6>
                  <p>{selectedJob.education}</p>
                  <button
                    className="btn btn-gradient"
                    data-bs-toggle="modal"
                    data-bs-target="#applyModal"
                  >
                    Apply Here
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Apply Modal */}
      <ApplyModal />
    </>
  );
};

export default Careers;
