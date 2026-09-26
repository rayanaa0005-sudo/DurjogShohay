import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";

import {
    FaExclamationTriangle,
    FaWater,
    FaWind,
    FaMountain,
    FaFire,
    FaSeedling,
    FaShieldAlt,
    FaFirstAid
} from "react-icons/fa";

import "../styles/Home.css";


function Home() {

    return (
        <div className="home-page">

            <NavBar />


            {/* Welcome Section */}

            <section className="welcome-section">

                <div className="welcome-text">

                    <p className="small-title">
                        YOUR SAFETY, OUR PRIORITY
                    </p>

                    <h1>
                        Stay Safe.
                        <br />
                        Stay Prepared.
                    </h1>

                    <p className="welcome-description">
                        DurjogShohay helps you find important disaster
                        information, support services and resources
                        when you need them most.
                    </p>

                    <Link
                        to="/contact"
                        className="emergency-button"
                    >
                        <FaExclamationTriangle />
                        Contact Us
                    </Link>

                </div>


                <div className="welcome-shape">

                    <div className="circle-one"></div>

                    <div className="circle-two"></div>

                </div>

            </section>


            {/* Disaster Information */}

            <section className="disaster-section">

                <h2>
                    Disaster Information
                </h2>

                <p className="section-description">
                    Learn what to do before, during and after
                    different types of disasters.
                </p>


                <div className="disaster-grid">


                    {/* Flood */}

                    <Link to="/disasters/flood" className="disaster-card">
                      <div className="disaster-icon">
                       <FaWater />
                      </div>

                      <div>
                        <h3>
                          Flood
                        </h3>

                        <p>
                          Safety tips and emergency information
                          during floods.
                        </p>
                      </div>
                    </Link>


                    {/* Cyclone */}

                    <Link to="/disasters/cyclone" className="disaster-card">

                        <div className="disaster-icon">
                            <FaWind />
                        </div>

                        <div>
                            <h3>
                                Cyclone
                            </h3>

                            <p>
                                Learn how to stay safe during cyclones.
                            </p>
                        </div>

                    </Link>


                    {/* Earthquake */}

                    <Link to="/disasters/earthquake" className="disaster-card">

                        <div className="disaster-icon">
                            <FaMountain />
                        </div>

                        <div>
                            <h3>
                                Earthquake
                            </h3>

                            <p>
                                Important earthquake safety guidelines.
                            </p>
                        </div>

                    </Link>


                    {/* Fire */}

                    <Link to="/disasters/fire" className="disaster-card">

                        <div className="disaster-icon">
                            <FaFire />
                        </div>

                        <div>
                            <h3>
                                Fire Safety
                            </h3>

                            <p>
                                Learn what to do during a fire emergency.
                            </p>
                        </div>

                    </Link>


                    {/* Landslide */}

                    <Link to="/disasters/landslide" className="disaster-card">

                        <div className="disaster-icon">
                            <FaMountain />
                        </div>

                        <div>
                            <h3>
                                Landslide
                            </h3>

                            <p>
                                Learn how to stay safe before and during
                                a landslide.
                            </p>
                        </div>

                    </Link>


                    {/* Drought */}

                    <Link to="/disasters/drought" className="disaster-card">

                        <div className="disaster-icon">
                            <FaSeedling />
                        </div>

                        <div>
                            <h3>
                                Drought
                            </h3>

                            <p>
                                Important information about water
                                conservation and drought safety.
                            </p>
                        </div>

                    </Link>


                </div>

            </section>


            {/* Be Prepared Section */}

            <section className="prepared-section">

                <h2>
                    Be Prepared
                </h2>

                <p className="section-description">
                    A few simple steps can help you stay safer
                    during an emergency.
                </p>


                <div className="prepared-grid">


                    <div className="prepared-card">

                        <div className="prepared-icon">
                            <FaShieldAlt />
                        </div>

                        <h3>
                            Stay Informed
                        </h3>

                        <p>
                            Keep yourself updated about disaster
                            warnings and local conditions.
                        </p>

                    </div>


                    <div className="prepared-card">

                        <div className="prepared-icon">
                            <FaFirstAid />
                        </div>

                        <h3>
                            Keep an Emergency Kit
                        </h3>

                        <p>
                            Keep essential medicine, water, food
                            and other emergency supplies ready.
                        </p>

                    </div>


                    <div className="prepared-card">

                        <div className="prepared-icon">
                            <FaExclamationTriangle />
                        </div>

                        <h3>
                            Know Where to Get Help
                        </h3>

                        <p>
                            Use DurjogShohay to find shelters,
                            organizations and other support services.
                        </p>

                    </div>


                </div>

            </section>


            {/* Footer */}

            <footer className="home-footer">

                <p>
                    © 2026 DurjogShohay. Stay safe, stay prepared.
                </p>

            </footer>

        </div>
    );
}


export default Home;