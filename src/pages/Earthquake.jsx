import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import {
    FaMountain,
    FaExclamationTriangle,
    FaShieldAlt,
    FaFirstAid,
    FaHome,
    FaArrowLeft
} from "react-icons/fa";
import "../styles/DisasterInfo.css";

function Earthquake() {
    return (
        <div className="disaster-page">

            <NavBar />

            <header className="disaster-header">

                <div className="disaster-header-content">

                    <p className="disaster-small-title">
                        DISASTER INFORMATION
                    </p>

                    <h1>
                        <FaMountain />
                        Earthquake
                    </h1>

                    <p className="disaster-introduction">
                        An earthquake is the sudden shaking of the ground
                        caused by movement beneath Earth's surface.
                        Earthquakes can damage buildings, roads and
                        infrastructure.
                    </p>

                </div>

            </header>


            <main className="disaster-container">

                <section className="quick-facts">

                    <h2>Earthquake: Quick Facts</h2>

                    <div className="facts-grid">

                        <div className="fact">
                            <span>Cause</span>
                            <strong>Sudden movement of Earth's crust</strong>
                        </div>

                        <div className="fact">
                            <span>Main Risk</span>
                            <strong>Building damage, injuries and falling objects</strong>
                        </div>

                        <div className="fact">
                            <span>Warning</span>
                            <strong>Earthquakes usually occur with little warning</strong>
                        </div>

                        <div className="fact">
                            <span>Priority</span>
                            <strong>Drop, Cover and Hold On</strong>
                        </div>

                    </div>

                </section>


                <section className="disaster-contents">

                    <h2>Contents</h2>

                    <ol>
                        <li><a href="#what-is">What is an earthquake?</a></li>
                        <li><a href="#effects">Earthquake hazards</a></li>
                        <li><a href="#before">Before an earthquake</a></li>
                        <li><a href="#during">During an earthquake</a></li>
                        <li><a href="#after">After an earthquake</a></li>
                        <li><a href="#kit">Emergency kit</a></li>
                    </ol>

                </section>


                <section className="disaster-info-section" id="what-is">

                    <h2>What is an earthquake?</h2>

                    <p>
                        An earthquake happens when energy is suddenly
                        released within Earth's crust, producing shaking
                        of the ground.
                    </p>

                    <p>
                        Earthquakes can vary greatly in strength. Strong
                        earthquakes may damage buildings, roads, bridges
                        and other infrastructure.
                    </p>

                </section>


                <section className="disaster-info-section" id="effects">

                    <h2>Earthquake hazards</h2>

                    <div className="disaster-type-grid">

                        <article className="disaster-type-card">
                            <FaMountain />
                            <h3>Ground Shaking</h3>
                            <p>
                                Strong shaking can damage buildings and
                                infrastructure.
                            </p>
                        </article>

                        <article className="disaster-type-card">
                            <FaHome />
                            <h3>Falling Objects</h3>
                            <p>
                                Furniture, glass and other objects may fall
                                during shaking.
                            </p>
                        </article>

                        <article className="disaster-type-card">
                            <FaExclamationTriangle />
                            <h3>Secondary Hazards</h3>
                            <p>
                                Earthquakes may be followed by fires,
                                landslides or other hazards.
                            </p>
                        </article>

                    </div>

                </section>


                <section className="disaster-info-section safety-section" id="before">

                    <div className="section-icon">
                        <FaShieldAlt />
                    </div>

                    <h2>Before an earthquake</h2>

                    <ul className="safety-list">
                        <li>Identify safe places inside your home.</li>
                        <li>Secure heavy furniture and appliances.</li>
                        <li>Keep emergency supplies ready.</li>
                        <li>Learn how to turn off utilities if necessary.</li>
                        <li>Keep important documents safely stored.</li>
                        <li>Practice Drop, Cover and Hold On.</li>
                    </ul>

                </section>


                <section className="disaster-info-section safety-section" id="during">

                    <div className="section-icon">
                        <FaExclamationTriangle />
                    </div>

                    <h2>During an earthquake</h2>

                    <ul className="safety-list">
                        <li>Drop to the ground.</li>
                        <li>Take cover under a sturdy table or desk.</li>
                        <li>Hold on until the shaking stops.</li>
                        <li>Stay away from windows and glass.</li>
                        <li>If outside, move away from buildings and power lines.</li>
                        <li>Do not use elevators during shaking.</li>
                    </ul>

                </section>


                <section className="disaster-info-section safety-section" id="after">

                    <div className="section-icon">
                        <FaFirstAid />
                    </div>

                    <h2>After an earthquake</h2>

                    <ul className="safety-list">
                        <li>Check yourself and others for injuries.</li>
                        <li>Be prepared for aftershocks.</li>
                        <li>Avoid damaged buildings.</li>
                        <li>Watch for broken glass and fallen objects.</li>
                        <li>Follow official instructions.</li>
                        <li>Use emergency supplies when necessary.</li>
                    </ul>

                </section>


                <section className="disaster-info-section" id="kit">

                    <h2>Emergency kit</h2>

                    <p>
                        Keep these supplies together in an emergency bag.
                    </p>

                    <div className="kit-grid">

                        <div className="kit-item">
                            <FaFirstAid />
                            <span>First-aid supplies</span>
                        </div>

                        <div className="kit-item">
                            <FaShieldAlt />
                            <span>Important documents</span>
                        </div>

                        <div className="kit-item">
                            <FaExclamationTriangle />
                            <span>Flashlight</span>
                        </div>

                        <div className="kit-item">
                            <FaMountain />
                            <span>Emergency water</span>
                        </div>

                    </div>

                </section>


                <section className="disaster-emergency">

                    <FaExclamationTriangle />

                    <div>
                        <h2>Remember</h2>

                        <p>
                            During an earthquake, protect yourself first.
                            Drop, Cover and Hold On until the shaking stops.
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

export default Earthquake;