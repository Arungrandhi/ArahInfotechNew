import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const AddCareer = () => {
  const [career, setCareer] = useState({
    title: "",
    location: "",
    experience: "",
    description: "",
    education: "",
    skills: "",
  });

  const handleChange = (e) => {
    setCareer({ ...career, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const careerData = {
      ...career,
      skills: career.skills.split(",").map((s) => s.trim()), // convert string to array
    };

    try {
      await axios.post("http://localhost:5000/careers", careerData);
      alert("Career added successfully ✅");
      setCareer({
        title: "",
        location: "",
        experience: "",
        description: "",
        education: "",
        skills: "",
      });
    } catch (error) {
      console.error("Error adding career:", error);
      alert("Failed to add career ❌");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Add New Career</h2>
      <div className="card p-4 shadow-lg">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            className="form-control mb-3"
            placeholder="Job Title"
            value={career.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            className="form-control mb-3"
            placeholder="Location"
            value={career.location}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="experience"
            className="form-control mb-3"
            placeholder="Experience (e.g. 1–4 Years)"
            value={career.experience}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            className="form-control mb-3"
            placeholder="Job Description"
            value={career.description}
            onChange={handleChange}
            required
          ></textarea>
          <input
            type="text"
            name="education"
            className="form-control mb-3"
            placeholder="Education Requirement"
            value={career.education}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="skills"
            className="form-control mb-3"
            placeholder="Required Skills (comma separated)"
            value={career.skills}
            onChange={handleChange}
            required
          />
          <button className="btn btn-primary w-100" type="submit">
            Add Career
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCareer;
