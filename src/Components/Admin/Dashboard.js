import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Dummy Components (replace these with your real components)
import AddCareer from './AddCareer'
import ViewCareer from './ViewCareer'
import Welcome from './Welcome'
import Login from "./Login";
import { loginstatus } from "../../App";

const Dashboard = () => {
  const [view, setView] = useState(""); // choosing dashboard view manually

  const [login,setLogin] = useContext(loginstatus)

  const dashboardView = () => {
    if (view === "") {
      return <Welcome />;
    } else if (view === "add") {
      return <AddCareer />;
    } else if (view === "view") {
      return <ViewCareer />;
    } else {
      return <h4>Invalid View</h4>;
    }
  };

 
    if(login){return (  
    <div className="container-fluid p-3 bg-light">
      <div className="row">

        {/* Sidebar */}
        <div className="col-3 bg-light p-4 shadow vh-100">
          <h4 className="mb-4 text-center">Admin Dashboard</h4>

          <button
            onClick={() => setView("add")}
            className="btn btn-outline-primary w-100 mb-3"
          >
            Add Career
          </button>

          <button
            onClick={() => setView("view")}
            className="btn btn-outline-secondary w-100 mb-3"
          >
            View Careers
          </button>

          <button className="btn btn-danger w-100">Logout</button>
        </div>

        {/* Main Content Area */}
        <div className="col-9 p-4">{dashboardView()}</div>
      </div>
    </div>
    )}
  else{
    return <Login />
  }
}

export default Dashboard;
