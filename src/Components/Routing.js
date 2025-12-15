import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './About'
import Careers from './Careers'
import Services from './Services'
import Contact from './Contact'
import Home from './Home'
import SoftDev from './SoftDev'
import Staffing from './Staffing'
import Management from './Management'
import AppDevelopment from './services/AppDevelopment'
import WebDevelopment from './services/WebDevelopment'
import ArtificialIntelligence from './services/AI'
import MachineLearning from './services/ML'
import CloudSecurity from './services/Cloud'
import Dashboard from "./Admin/Dashboard"
import AddCareer from './Admin/AddCareer'
import ViewCareer from './Admin/ViewCareer'
import DeepLearning from './services/DeepLearning'
import ScrollToTop from './ScrollToTop'
import Login from './Admin/Login'

const Routing = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/career' Component={Careers} />
        <Route path='/contact' Component={Contact} />
        <Route path='/services' Component={Services} />
        <Route path='/softdev' Component={SoftDev} />
        <Route path='/staffing' Component={Staffing} />
        <Route path='/management' Component={Management} />
        <Route path="/appdev" Component={AppDevelopment} />
        <Route path="/webdev" Component={WebDevelopment} />
        <Route path="/clouddev" Component={CloudSecurity} />
        <Route path="/aidev" Component={ArtificialIntelligence} />
        <Route path="/mldev" Component={MachineLearning} />
        <Route path="/deeplearning" Component={DeepLearning} />
        <Route path='/dashboard' Component={Dashboard} />
        <Route path='/admin' Component={Login} />
        <Route path="/add" Component={AddCareer} />
        <Route path="/view" Component={ViewCareer} />
      </Routes>
    </>
  )
}

export default Routing
