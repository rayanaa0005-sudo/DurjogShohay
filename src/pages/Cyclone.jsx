import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import {
    FaWind,
    FaExclamationTriangle,
    FaShieldAlt,
    FaFirstAid,
    FaCloud,
    FaArrowLeft
} from "react-icons/fa";
import "../styles/DisasterInfo.css";

function Cyclone() {
    return (
        <div className="disaster-page">

            <NavBar />

            <header className="disaster-header">
                <div className="disaster-header-content">

                    <p className="disaster-small-title">
                        DISASTER INFORMATION
                    </p>

                    <h1>
                        <FaWind />
                        Cyclone
                    </h1>

                    <p className="disaster-introduction">
                        A cyclone is a large rotating storm system with
                        strong winds and heavy rainfall. Cyclones can cause
                        storm surges, flooding and damage to homes and
                        infrastructure.
                    </p>

                </div>
            </header>


            <main className="disaster-container">

                <section className="quick-facts">

                    <h2>Cyclone: Quick Facts</h2>

                    <div className="facts-grid">

                        <div className="fact">
                            <span>Cause</span>
                            <strong>Warm ocean water and atmospheric conditions</strong>
                        </div>

                        <div className="fact">
                            <span>Main Risk</span>
                            <strong>Strong winds, flooding and storm surge</strong>
                        </div>

                        <div className="fact">
                            <span>Warning</span>
                            <strong>Weather forecasts and cyclone warnings</strong>
                        </div>

                        <div className="fact">
                            <span>Priority</span>
                            <strong>Move to a safe shelter when advised</strong>
                        </div>

                    </div>

                </section>


                <section className="disaster-contents">

                    <h2>Contents</h2>

                    <ol>
                        <li><a href="#what-is">What is a cyclone?</a></li>
                        <li><a href="#formation">How cyclones form</a></li>
                        <li><a href="#types">Types of cyclone hazards</a></li>
                        <li><a href="#before">Before a cyclone</a></li>
                        <li><a href="#during">During a cyclone</a></li>
                        <li><a href="#after">After a cyclone</a></li>
                        <li><a href="#kit">Emergency kit</a></li>
                    </ol>

                </section>


                <section className="disaster-info-section" id="what-is">

                    <h2>What is a cyclone?</h2>

                    <p>
                        A cyclone is a rotating weather system that forms
                        around an area of low atmospheric pressure. Tropical
                        cyclones can produce powerful winds, heavy rain and
                        dangerous coastal flooding.
                    </p>

                    <p>
                        The effects of a cyclone can extend far beyond the
                        area where the strongest winds occur. Flooding,
                        fallen trees and damaged buildings can create
                        additional hazards.
                    </p>

                </section>


                <section className="disaster-info-section" id="formation">

                    <h2>How cyclones form</h2>

                    <p>
                        Tropical cyclones generally develop over warm ocean
                        water when atmospheric conditions allow thunderstorms
                        to organize and rotate around a low-pressure center.
                    </p>

                    <ul>
                        <li>Warm ocean water provides energy.</li>
                        <li>Moist air supports thunderstorms.</li>
                        <li>Low atmospheric pressure helps the system develop.</li>
                        <li>Earth's rotation contributes to the storm's rotation.</li>
                    </ul>

                </section>


                <section className="disaster-info-section" id="types">

                    <h2>Cyclone hazards</h2>

                    <div className="disaster-type-grid">

                        <article className="disaster-type-card">
                            <FaWind />
                            <h3>Strong Winds</h3>
                            <p>
                                Powerful winds can damage buildings, trees,
                                roads and power lines.
                            </p>
                        </article>

                        <article className="disaster-type-card">
                            <FaCloud />
                            <h3>Heavy Rain</h3>
                            <p>
                                Intense rainfall can cause flooding and
                                waterlogging in affected areas.
                            </p>
                        </article>

                        <article className="disaster-type-card">
                            <FaExclamationTriangle />
                            <h3>Storm Surge</h3>
                            <p>
                                Rising seawater caused by a cyclone can
                                threaten coastal communities.
                            </p>
                        </article>

                    </div>

                </section>


                <section className="disaster-info-section safety-section" id="before">

                    <div className="section-icon">
                        <FaShieldAlt />
                    </div>

                    <h2>Before a cyclone</h2>

                    <ul className="safety-list">
                        <li>Monitor official cyclone warnings.</li>
                        <li>Know the location of the nearest cyclone shelter.</li>
                        <li>Store drinking water and essential food.</li>
                        <li>Secure loose objects around your home.</li>
                        <li>Keep important documents in a waterproof container.</li>
                        <li>Charge phones and backup power banks.</li>
                        <li>Prepare medicines and first-aid supplies.</li>
                    </ul>

                </section>


                <section className="disaster-info-section safety-section" id="during">

                    <div className="section-icon">
                        <FaExclamationTriangle />
                    </div>

                    <h2>During a cyclone</h2>

                    <ul className="safety-list">
                        <li>Stay indoors or inside a designated shelter.</li>
                        <li>Stay away from windows and doors.</li>
                        <li>Follow instructions from authorities.</li>
                        <li>Do not go outside during the storm.</li>
                        <li>Keep emergency supplies nearby.</li>
                        <li>Avoid flooded roads and coastal areas.</li>
                    </ul>

                </section>


                <section className="disaster-info-section safety-section" id="after">

                    <div className="section-icon">
                        <FaFirstAid />
                    </div>

                    <h2>After a cyclone</h2>

                    <ul className="safety-list">
                        <li>Wait for official confirmation before leaving shelter.</li>
                        <li>Avoid damaged buildings and fallen power lines.</li>
                        <li>Avoid floodwater whenever possible.</li>
                        <li>Use safe drinking water.</li>
                        <li>Check family members for injuries.</li>
                        <li>Report dangerous conditions to authorities.</li>
                    </ul>

                </section>


                <section className="disaster-info-section" id="kit">

                    <h2>Emergency kit</h2>

                    <p>
                        Keep essential supplies together in an easily
                        accessible emergency bag.
                    </p>

                    <div className="kit-grid">

                        <div className="kit-item">
                            <FaFirstAid />
                            <span>First-aid supplies</span>
                        </div>

                        <div className="kit-item">
                            <FaWind />
                            <span>Battery radio</span>
                        </div>

                        <div className="kit-item">
                            <FaShieldAlt />
                            <span>Important documents</span>
                        </div>

                        <div className="kit-item">
                            <FaExclamationTriangle />
                            <span>Flashlight</span>
                        </div>

                    </div>

                </section>


                <section className="disaster-emergency">

                    <FaExclamationTriangle />

                    <div>
                        <h2>Remember</h2>

                        <p>
                            Follow official cyclone warnings and evacuation
                            instructions. If you are in immediate danger,
                            contact the appropriate emergency services.
                        </p>
                    </div>

                </section>


                <div className="back-home">

                    <Link to="/">
                        <FaArrowLeft />
                        Back to Home
                    </Link>

                </div>

            </main>


            <footer className="disaster-footer">

                <p>
                    © 2026 DurjogShohay. Stay safe, stay prepared.
                </p>

            </footer>

        </div>
    );
}

export default Cyclone;