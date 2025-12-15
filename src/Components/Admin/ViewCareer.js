import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ✅ Add this

const ViewCareer = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [editJob, setEditJob] = useState({
    title: "",
    location: "",
    experience: "",
    description: "",
    education: "",
    skills: "",
  });

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = () => {
    axios
      .get("http://localhost:5000/careers")
      .then((res) => setJobs(res.data))
      .catch((err) => console.error("Error fetching careers:", err));
  };

  // Delete a job
  const deleteJob = async (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      await axios.delete(`http://localhost:5000/careers/${id}`);
      loadJobs(); // reload data
    }
  };

  // Open Edit Modal
  const openEditModal = (job) => {
    setSelectedJob(job);
    setEditJob({
      title: job.title,
      location: job.location,
      experience: job.experience,
      description: job.description,
      education: job.education,
      skills: job.skills?.join(", ") || "",
    });
  };

  // Handle Edit Form Submit
  const handleEditSubmit = async () => {
    await axios.put(`http://localhost:5000/careers/${selectedJob._id}`, {
      ...editJob,
      skills: editJob.skills.split(",").map((s) => s.trim()),
    });
    loadJobs();
    document.getElementById("closeEditModal").click();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Career Openings</h2>

      <div className="row g-4">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div className="col-md-4" key={job._id}>
              <div className="career-card shadow-lg p-4 rounded-4 h-100">
                <h4 className="fw-bold text-primary mb-2">{job.title}</h4>
                <p className="text-dark"><i className="bi bi-geo-alt"></i> {job.location}</p>
                <p className="text-dark"><i className="bi bi-clock"></i> {job.experience}</p>

                <button
                  className="btn btn-outline-primary me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#jobDetailsModal"
                  onClick={() => setSelectedJob(job)}
                >
                  View
                </button>
                <button
                  className="btn btn-warning me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#editJobModal"
                  onClick={() => openEditModal(job)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteJob(job._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No job openings found.</p>
        )}
      </div>

      {/* Edit Modal */}
      <div className="modal fade" id="editJobModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content p-3">
            <div className="modal-header">
              <h5  className="text-light">Edit Job</h5>
              <button id="closeEditModal" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <input className="form-control mb-2" value={editJob.title} onChange={(e) => setEditJob({ ...editJob, title: e.target.value })} placeholder="Title" />
              <input className="form-control mb-2" value={editJob.location} onChange={(e) => setEditJob({ ...editJob, location: e.target.value })} placeholder="Location" />
              <input className="form-control mb-2" value={editJob.experience} onChange={(e) => setEditJob({ ...editJob, experience: e.target.value })} placeholder="Experience" />
              <textarea className="form-control mb-2" value={editJob.description} onChange={(e) => setEditJob({ ...editJob, description: e.target.value })} placeholder="Description"></textarea>
              <input className="form-control mb-2" value={editJob.education} onChange={(e) => setEditJob({ ...editJob, education: e.target.value })} placeholder="Education" />
              <input className="form-control mb-2" value={editJob.skills} onChange={(e) => setEditJob({ ...editJob, skills: e.target.value })} placeholder="Skills (comma separated)" />
              <button className="btn btn-primary w-100" onClick={handleEditSubmit}>
                Save Changes
              </button>
            </div>
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
                  ></button>
                </div>
                  
                <div className="modal-body">
                  <p className="text-dark">
                  <i className="bi bi-geo-alt"></i>Location: {selectedJob.location}
                </p>
                <p className="text-dark">
                  <i className="bi bi-clock"></i>Expreience: {selectedJob.experience}
                </p>
                  <p>{selectedJob.description}</p>
                  <h6>Required Skills:</h6>
                  <ul>
                    {selectedJob.skills?.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                  <h6>Education & Experience</h6>
                  <p>{selectedJob.education}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCareer;
