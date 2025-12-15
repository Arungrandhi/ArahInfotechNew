import React, { useState } from "react";

const ApplyModal = () => {
  const [refType, setRefType] = useState("");

  return (
   <div
        className="modal fade"
        id="applyModal"
        tabIndex="-1"
        aria-labelledby="applyModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="applyModalLabel">
                Apply Here
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="form-outline mb-4 pt-3">
                  <label className="form-label">Self (or) Reference</label>
                  <select
                    name="ref_self"
                    className="form-select"
                    value={refType}
                    onChange={(e) => setRefType(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="self">Self</option>
                    <option value="reference">Reference</option>
                  </select>
                </div>

                {refType === "reference" && (
                  <div className="form-outline mb-4">
                    <label className="form-label">Reference Name</label>
                    <input
                      type="text"
                      name="reference_name"
                      className="form-control"
                      placeholder="Enter Reference Name"
                    />
                  </div>
                )}

                <div className="form-outline mb-4">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="full_name"
                    className="form-control"
                    placeholder="Enter Your Name"
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label">Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    className="form-control"
                    placeholder="Enter Mobile Number"
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label">Upload Resume</label>
                  <input type="file" name="resume" className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ApplyModal;
