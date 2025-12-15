import './App.css';
import './ServiceDetails.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css"
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Routing from './Components/Routing';
import { createContext, useState } from 'react';
import ScrollToTopButton from './ScrollToTopButton';
export const loginstatus = createContext()

function AppWrapper() {
  const location = useLocation();


  // Check if current route is home page
  const hideHeader = location.pathname === "";

  return (

    <>
      <div className="page-bg" />
      {!hideHeader && <Header />}
      <Routing />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

function App() {
  const [login, setLogin] = useState(false)
  return (
    <loginstatus.Provider value={[login,setLogin]}>
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </loginstatus.Provider>
  );
}

export default App;




// <section
//   className="hero-section home-container"
//   style={{
//     position: "relative",
//     height: "100vh",
//     overflow: "hidden",
//     background: "black",
//   }}
// >
//   {/* === Hyperspeed Background === */}
//   <div
//     style={{
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       zIndex: 0,
//     }}
//   >
//     <Hyperspeed
//       effectOptions={{
//         onSpeedUp: () => {},
//         onSlowDown: () => {},
//         distortion: "turbulentDistortion",
//         length: 400,
//         roadWidth: 10,
//         islandWidth: 2,
//         lanesPerRoad: 4,
//         fov: 90,
//         fovSpeedUp: 150,
//         speedUp: 2,
//         carLightsFade: 0.4,
//         totalSideLightSticks: 20,
//         lightPairsPerRoadWay: 40,
//         shoulderLinesWidthPercentage: 0.05,
//         brokenLinesWidthPercentage: 0.1,
//         brokenLinesLengthPercentage: 0.5,
//         lightStickWidth: [0.12, 0.5],
//         lightStickHeight: [1.3, 1.7],
//         movingAwaySpeed: [60, 80],
//         movingCloserSpeed: [-120, -160],
//         carLightsLength: [400 * 0.03, 400 * 0.2],
//         carLightsRadius: [0.05, 0.14],
//         carWidthPercentage: [0.3, 0.5],
//         carShiftX: [-0.8, 0.8],
//         carFloorSeparation: [0, 5],
//         colors: {
//           roadColor: 0x080808,
//           islandColor: 0x0a0a0a,
//           background: 0x000000,
//           shoulderLines: 0xffffff,
//           brokenLines: 0xffffff,
//           leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
//           rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
//           sticks: 0x03b3c3,
//         },
//       }}
//     />
//   </div>

//   {/* === Light Rays Overlay === */}
//   <div
//     style={{
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       zIndex: 1,
//       mixBlendMode: "screen", // soft glow blending
//       pointerEvents: "none", // ensures it doesn't block clicks
//     }}
//   >
//     <LightRays
//       raysOrigin="top-center"
//       raysColor="#b9bdbdff"
//       raysSpeed={1.5}
//       lightSpread={0.8}
//       rayLength={1.2}
//       followMouse={true}
//       mouseInfluence={0.1}
//       noiseAmount={0.1}
//       distortion={0.05}
//       className="custom-rays"
//     />
//   </div>

//   {/* === Hero Content === */}
//   <div
//     className="hero-content"
//     style={{
//       position: "relative",
//       zIndex: 2,
//       padding: "0 2rem",
//       top: "50%",
//       transform: "translateY(-50%)",
//     }}
//   >
//     <div
//       style={{ textAlign: "center" }}
//       data-aos="fade-up-right"
//       data-aos-delay={450}
//     >
//       <h1 className="bannercontent">
//         <span>
//           <strong>Welcome To Arah Infotech</strong>
//         </span>
//       </h1>
//     </div>

//     <div
//       style={{ textAlign: "center" }}
//       data-aos="fade-up-left"
//       data-aos-delay={850}
//     >
//       <p style={{ color: "white", paddingBottom: "1rem" }}>
//         <strong>
//           We build scalable, secure, and insightful digital platforms tailored
//           for your growth and innovation.
//         </strong>
//       </p>
//     </div>

//     <div
//       className="animate__animated animate__fadeInDown"
//       style={{ animationDelay: "1.5s", animationDuration: "1s", textAlign: "center" }}
//     >
//       <NavLink to="/career">
//         <button className="btn-primary">Explore Careers</button>
//       </NavLink>
//     </div>
//   </div>
// </section>
