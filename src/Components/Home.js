import React, { useEffect, useState } from 'react';
import { Aperture, Zap, Shield, ArrowRight } from 'lucide-react';
import Header from "./Header";
import { NavLink } from 'react-router-dom';
import Squares from './React-bits/Squares';
import bgvideo from "./Assects/bannervideo.mp4";
import ApplyModal from "./ApplyModal";
import Hyperspeed from './React-bits/Hyperspeed';
import Particles from './React-bits/Particles';
import LightRays from './/React-bits/LightRays';


// --- Custom CSS Definition ---
const customCss = `
.app-container {
    min-height: 100vh;
    background-color: #f9fafb; /* bg-gray-50 */
    font-family: 'Inter', sans-serif;
    color: #374151; /* text-gray-800 */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* --- Hero Section --- */
.hero-section {
    padding: 6rem 0; /* pt-24 pb-24 */
    background: linear-gradient(to bottom right, #eef2ff, #ffffff); /* bg-gradient-to-br from-indigo-50 to-white */
}
@media (min-width: 1024px) {
    .hero-section {
        padding: 8rem 0; /* lg:pt-32 lg:pb-32 */
    }
}

.hero-content {
    max-width: 80rem; /* max-w-7xl */
    margin: 0 auto;
    padding: 0 1rem; /* px-4 */
    text-align: center;
}
@media (min-width: 640px) {
    .hero-content {
        padding: 0 1.5rem; /* sm:px-6 */
    }
}
@media (min-width: 1024px) {
    .hero-content {
        padding: 0 2rem; /* lg:px-8 */
    }
}

.hero-title {
    font-size: 2.25rem; /* text-4xl */
    line-height: 1.25; /* leading-tight */
    margin-bottom: 1rem;
    font-weight: 800; /* font-extrabold */
    color: #e5e5e5ff; /* text-gray-900 */
}
.hero-title-primary {
    color: #4f46e5; /* text-indigo-600 */
}
@media (min-width: 640px) {
    .hero-title {
        font-size: 3rem; /* sm:text-5xl */
    }
}
@media (min-width: 1024px) {
    .hero-title {
        font-size: 3.75rem; /* lg:text-6xl */
    }
}

.hero-subtitle {
    font-size: 1.25rem; /* text-xl */
    color: #4b5563; /* text-gray-600 */
    max-width: 48rem; /* max-w-3xl */
    margin: 0 auto 2rem;
}

.hero-actions {
    display: flex;
    justify-content: center;
    gap: 1rem; /* space-x-4 */
}

.btn-primary, .btn-secondary {
    padding: 0.75rem 2rem; /* px-8 py-3 */
    font-weight: 700; /* font-bold */
    border-radius: 2.5rem; /* rounded-lg */
    transition: all 0.3s ease;
    cursor: pointer;
    border: 1px solid transparent;
}

.btn-primary {
    background-color: #4f46e5; /* bg-indigo-600 */
    color: white;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
}
.btn-primary:hover {
    background-color: #4338ca; /* hover:bg-indigo-700 */
    transform: translateY(-2px); /* transform hover:-translate-y-0.5 */
}

.btn-secondary {
    background-color: white;
    color: #4b5563; /* text-gray-700 */
    border-color: #d1d5db; /* border border-gray-300 */
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06); /* shadow-md */
}
.btn-secondary:hover {
    background-color: #f3f4f6; /* hover:bg-gray-100 */
}

/* --- Solutions Section --- */
.solutions-section {
    padding: 5rem 0; /* py-20 */
    background-color: white;
}
@media (min-width: 768px) {
    .solutions-section {
        padding: 8rem 0; /* md:py-32 */
    }
}

.section-header {
    text-align: center;
    margin-bottom: 4rem; /* mb-16 */
}

.header-tag {
    font-size: 2rem; /* text-base */
    color: #4f46e5; /* text-indigo-600 */
    font-weight: 900; /* font-semibold */
    letter-spacing: 0.05em; /* tracking-wide */
    text-transform: uppercase;
}

.header-title {
    margin-top: 0.5rem;
    font-size: 1.875rem; /* text-3xl */
    font-weight: 800; /* font-extrabold */
    color: #111827; /* text-gray-900 */
}
@media (min-width: 640px) {
    .header-title {
        font-size: 2.25rem; /* sm:text-4xl */
    }
}
@media (min-width: 1024px) {
    .header-title {
        font-size: 3rem; /* lg:text-5xl */
    }
}

.header-subtitle {
    margin-top: 1rem;
    font-size: 1.25rem; /* text-xl */
    color: #4b5563; /* text-gray-600 */
    max-width: 56rem; /* max-w-4xl */
    margin-left: auto;
    margin-right: auto;
}

/* --- Solutions Grid --- */
.solutions-grid {
    display: grid;
    gap: 3rem; /* gap-12 */
}

@media (min-width: 1024px) {
    .solutions-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 2rem; /* lg:gap-8 */
    }
}

/* --- Solution Card --- */
.solution-card {
    display: flex;
    flex-direction: column;
    height: 88%;
    background-color: white;
    border-radius: 0.75rem; /* rounded-xl */
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); /* shadow-2xl */
    overflow: hidden;
    transition: transform 0.5s, box-shadow 0.5s;
}

.solution-card:hover {
    transform: scale(1.03); /* hover:scale-[1.03] */
    box-shadow: 0 25px 50px -12px rgba(79, 70, 229, 0.25); /* Simulated hover:shadow-primary-lg */
}

.card-content {
    padding: 1.5rem; /* p-6 */
    flex-grow: 1;
}
@media (min-width: 768px) {
    .card-content {
        padding: 2rem; /* md:p-8 */
    }
}

.card-icon-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem; /* space-x-4 */
    margin-bottom: 1rem;
}

.card-icon {
    padding: 0.75rem; /* p-3 */
    border-radius: 9999px; /* rounded-full */
    background-color: #e0e7ff; /* bg-indigo-100 */
    color: #4f46e5; /* text-indigo-600 */
    transition: background-color 0.3s, color 0.3s;
}

.solution-card:hover .card-icon {
    background-color: #4f46e5; /* group-hover:bg-indigo-600 */
    color: white; /* group-hover:text-white */
}

.card-title {
    font-size: 1.5rem; /* text-2xl */
    font-weight: 800; /* font-extrabold */
    color: #111827; /* text-gray-900 */
    transition: color 0.3s;
}

.solution-card:hover .card-title {
    color: #3730a3; /* group-hover:text-indigo-700 */
}

.card-description {
    color: #4b5563; /* text-gray-600 */
    margin-top: 1rem;
    line-height: 1.625; /* leading-relaxed */
}

.card-link {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    color: #4f46e5; /* text-indigo-600 */
    font-weight: 600; /* font-semibold */
    transition: color 0.3s;
}

.card-link:hover {
    color: #3730a3; /* hover:text-indigo-800 */
}

.card-link svg {
    margin-left: 0.25rem;
    transition: transform 0.3s;
}

.solution-card:hover .card-link svg {
    transform: translateX(4px); /* group-hover:translate-x-1 */
}

.card-image {
    height: 12rem; /* h-48 */
    width: 100%;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s;
}

.solution-card:hover .card-image img {
    opacity: 0.85; /* group-hover:opacity-85 */
}
`;
// --- End Custom CSS Definition ---


// Helper component for Solution Cards
const SolutionCard = ({ icon: Icon, title, description, aosDelay, imageUrl }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={aosDelay}
            className="solution-card" // Custom CSS class
        >
            <div className="card-content"> {/* Custom CSS class */}
                <div className="card-icon-wrapper"> {/* Custom CSS class */}
                    <div className="card-icon"> {/* Custom CSS class */}
                        <Icon size={28} strokeWidth={2.5} />
                    </div>
                    <h3 className="card-title"> {/* Custom CSS class */}
                        {title}
                    </h3>
                </div>

                <p className="card-description"> {/* Custom CSS class */}
                    {description}
                </p>
                <a href="#" className="card-link"> {/* Custom CSS class */}
                    Know More <ArrowRight size={18} />
                </a>
            </div>

            {/* Fake Image Placeholder */}
            <div className="card-image"> {/* Custom CSS class */}
                <img
                    className='h-75'
                    src={imageUrl}
                    alt={title}
                    // No inline classes, style applied via card-image img selector
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/5C6BC0/ffffff?text=Solution+Visualization" }}
                />
            </div>
        </div>
    );
};

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};


const Home = () => {

    const [refType, setRefType] = useState("");
    // This useEffect hook simulates the loading and initialization of AOS, which is necessary for animations to run.
    useEffect(() => {
        // Dynamically load and initialize AOS
        if (typeof window !== 'undefined' && !window.AOS) {
            const link = document.createElement('link');
            link.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
            link.rel = 'stylesheet';
            document.head.appendChild(link);

            const script = document.createElement('script');
            script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
            script.onload = () => {
                if (window.AOS) {
                    window.AOS.init({
                        duration: 1000,
                        once: true,
                        easing: 'ease-in-out',
                        delay: 100, // global delay
                    });
                }
            };
            document.body.appendChild(script);
        } else if (window.AOS) {
            // Re-initialize if already loaded to pick up new elements
            window.AOS.refreshHard();
        }
    }, []);

    return (
        <div className="app-container">
            {/* Inject Custom CSS */}
            <style>{customCss}</style>

            <main>
                {/* Hero Section */}

               <section
  className="hero-section home-container"
  style={{
    position: "relative",
    height: "100vh",
    overflow: "hidden",
    background: "black",
  }}
>
  {/* === Hyperspeed Background === */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
    }}
  >
    <Hyperspeed
      effectOptions={{
        onSpeedUp: () => {},
        onSlowDown: () => {},
        distortion: "turbulentDistortion",
        length: 400,
        roadWidth: 10,
        islandWidth: 2,
        lanesPerRoad: 4,
        fov: 90,
        fovSpeedUp: 150,
        speedUp: 2,
        carLightsFade: 0.4,
        totalSideLightSticks: 20,
        lightPairsPerRoadWay: 40,
        shoulderLinesWidthPercentage: 0.05,
        brokenLinesWidthPercentage: 0.1,
        brokenLinesLengthPercentage: 0.5,
        lightStickWidth: [0.12, 0.5],
        lightStickHeight: [1.3, 1.7],
        movingAwaySpeed: [60, 80],
        movingCloserSpeed: [-120, -160],
        carLightsLength: [400 * 0.03, 400 * 0.2],
        carLightsRadius: [0.05, 0.14],
        carWidthPercentage: [0.3, 0.5],
        carShiftX: [-0.8, 0.8],
        carFloorSeparation: [0, 5],
        colors: {
          roadColor: 0x080808,
          islandColor: 0x0a0a0a,
          background: 0x000000,
          shoulderLines: 0xffffff,
          brokenLines: 0xffffff,
          leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
          rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
          sticks: 0x03b3c3,
        },
      }}
    />
  </div>

  {/* === Light Rays Overlay === */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 1,
      mixBlendMode: "screen", // soft glow blending
      pointerEvents: "none", // ensures it doesn't block clicks
    }}
  >
    <LightRays
      raysOrigin="top-center"
      raysColor="#b9bdbdff"
      raysSpeed={1.5}
      lightSpread={0.8}
      rayLength={1.2}
      followMouse={true}
      mouseInfluence={0.1}
      noiseAmount={0.1}
      distortion={0.05}
      className="custom-rays"
    />
  </div>

  {/* === Hero Content === */}
  <div
    className="hero-content"
    style={{
      position: "relative",
      zIndex: 2,
      padding: "0 2rem",
      top: "50%",
      transform: "translateY(-50%)",
    }}
  >
    <div
      style={{ textAlign: "center" }}
      data-aos="fade-up-right"
      data-aos-delay={450}
    >
      <h1 className="bannercontent">
        <span>
          <strong>Welcome To Arah Infotech</strong>
        </span>
      </h1>
    </div>

    <div
      style={{ textAlign: "center" }}
      data-aos="fade-up-left"
      data-aos-delay={850}
    >
      <p style={{ color: "white", paddingBottom: "1rem" }}>
        <strong>
          We build scalable, secure, and insightful digital platforms tailored
          for your growth and innovation.
        </strong>
      </p>
    </div>

    <div
      className="animate__animated animate__fadeInDown"
      style={{ animationDelay: "1.5s", animationDuration: "1s", textAlign: "center" }}
    >
      <NavLink to="/career">
        <button className="btn-primary">Explore Careers</button>
      </NavLink>
    </div>
  </div>
</section>





                {/* Solutions Section */}
                <section id="solutions" className="solutions-section" style={{ position: 'relative',padding:'20px', height: '100%', overflow: 'hidden', background: ' #000000ff' }}>
                    {/* Squares Background */}
                    <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
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

                    <div className="hero-content"> {/* Reusing hero-content for centering/padding */}

                        {/* Heading */}
                        <div data-aos="fade-right" className="section-header">
                            <h2 className="header-tag ">Our Core Offerings</h2>
                            <p className="header-title text-primary">
                                Arah Infotech
                            </p>
                            <p className="header-subtitle text-white">
                                Arah Infotech is a solitary point IT Staffing and Software solutions provider from small scale businesses to Multi-National organizations. Our solutions do not come out of a box ready to plug and play.
                                We pride ourselves on distinguishing the challenges quickly and designing strategies to address them, continually keeping top of mind our client as requirements for insignificant disruption.
                            </p>
                        </div>

                        {/* Solutions Grid */}
                        <div className=" solutions-grid">
                            <NavLink to="/webdev" className="text-decoration-none">
                                <SolutionCard
                                    icon={Zap} // ⚡ Zap icon for Staffing
                                    title="Web Development"
                                    description="We build responsive, modern, and secure websites with seamless frontend and backend integration. Our team ensures optimized performance, accessibility, and scalability for your business."
                                    aosDelay="100"
                                    imageUrl="https://placehold.co/600x400/4F46E5/ffffff?text=Web+Development"
                                />
                            </NavLink>

                            <NavLink to="/appdev" className="text-decoration-none">
                                <SolutionCard
                                    icon={Aperture} // 🎯 Aperture icon for Software Development
                                    title="App Development"
                                    description="We design, code, and deploy cross-platform mobile and desktop applications tailored to your business. Our apps deliver outstanding performance and user experience across all devices."
                                    aosDelay="300"
                                    imageUrl="https://placehold.co/600x400/10B981/ffffff?text=App+Development"
                                />
                            </NavLink>

                            <NavLink to="/aidev" className="text-decoration-none">
                                <SolutionCard
                                    icon={Shield} // 🛡️ Shield icon for Management
                                    title="Artificial Intelligence"
                                    description="AI-driven solutions that enhance automation, analytics, and real-time decision-making across industries. We help you integrate AI into your workflows for smarter business operations."
                                    aosDelay="500"
                                    imageUrl="https://placehold.co/600x400/F97316/ffffff?text=Artificial+Intelligence"
                                />
                            </NavLink>
                            <NavLink to="/mldev" className="text-decoration-none">
                                <SolutionCard
                                    icon={Zap} // ⚡ Zap icon for Staffing
                                    title="Machine Learning"
                                    description="We implement ML models to predict trends, recognize patterns, and improve your system’s intelligence. Our experts tailor data-driven models that evolve with your business needs."
                                    aosDelay="100"
                                    imageUrl="https://placehold.co/600x400/4F46E5/ffffff?text=Machine+Learning"
                                />
                            </NavLink>

                            <NavLink to="/clouddev" className="text-decoration-none">
                                <SolutionCard
                                    icon={Aperture} // 🎯 Aperture icon for Software Development
                                    title="Cloud Security"
                                    description="We secure your data and infrastructure with advanced cloud protection, backup, and monitoring solutions. Our services ensure compliance, reliability, and peace of mind for your business."
                                    aosDelay="300"
                                    imageUrl="https://placehold.co/600x400/10B981/ffffff?text=Cloud+Security"
                                />
                            </NavLink>

                            <NavLink to="/deeplearning" className="text-decoration-none">
                                <SolutionCard
                                    icon={Shield} // 🛡️ Shield icon for Management
                                    title="Deep Learning"
                                    description="Enhance operational efficiency and strategic decision-making with our management solutions. Monitor processes, manage projects, and gain actionable insights for growth."
                                    aosDelay="500"
                                    imageUrl="https://placehold.co/600x400/F97316/ffffff?text=Deep+Learning"
                                />
                            </NavLink>

                        </div>

                    </div>
                </section>
            </main>


            <ApplyModal />
        </div>
    );
};

export default Home;
