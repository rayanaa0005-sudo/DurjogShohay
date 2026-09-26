import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import {
    FaMountain,
    FaExclamationTriangle,
    FaShieldAlt,
    FaFirstAid,
    FaCloudRain,
    FaArrowLeft
} from "react-icons/fa";
import "../styles/DisasterInfo.css";

function Landslide() {
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
                        Landslide
                    </h1>

                    <p className="disaster-introduction">
                        A landslide is the movement of rock, soil or debris
                        down a slope. Heavy rainfall and unstable ground can
                        increase the risk of landslides.
                    </p>

                </div>

            </header>


            <main className="disaster-container">

                <section className="quick-facts">

                    <h2>Landslide: Quick Facts</h2>

                    <div className="facts-grid">

                        <div className="fact">
                            <span>Major Cause</span>
                            <strong>Heavy rainfall and unstable slopes</strong>
                        </div>

                        <div className="fact">
                            <span>Main Risk</span>
                            <strong>Moving soil, rocks and debris</strong>
                        </div>

                        <div className="fact">
                            <span>Warning Signs</span>
                            <strong>Cracks, falling rocks and unusual ground movement</strong>
                        </div>

                        <div className="fact">
                            <span>Priority</span>
                            <strong>Move away from the landslide area</strong>
                        </div>

                    </div>

                </section>


                <section className="disaster-contents">

                    <h2>Contents</h2>

                    <ol>
                        <li><a href="#what-is">What is a landslide?</a></li>
                        <li><a href="#warning">Warning signs</a></li>
                        <li><a href="#triggers">Common triggers</a></li>
                        <li><a href="#before">Before a landslide</a></li>
                        <li><a href="#during">During a landslide</a></li>
                        <li><a href="#after">After a landslide</a></li>
                        <li><a href="#kit">Emergency kit</a></li>
                    </ol>

                </section>


                <section className="disaster-info-section" id="what-is">

                    <h2>What is a landslide?</h2>

                    <p>
                        A landslide occurs when rock, soil, mud or debris
                        moves down a slope. Landslides can happen suddenly
                        and may be triggered by heavy rainfall, earthquakes
                        or changes to the landscape.
                    </p>

                    <p>
                        Landslides can block roads, damage buildings and
                        affect communities located near steep or unstable
                        slopes.
                    </p>

                </section>


                <section className="disaster-info-section" id="warning">

                    <h2>Warning signs</h2>

                    <ul>
                        <li>New cracks appearing in the ground or buildings.</li>
                        <li>Unusual movement of soil or rocks.</li>
                        <li>Trees or poles beginning to lean.</li>
                        <li>Sudden changes in streams or drainage.</li>
                        <li>Small rocks or debris falling from slopes.</li>
                    </ul>

                </section>


                <section className="disaster-info-section" id="triggers">

                    <h2>Common triggers</h2>

                    <div className="disaster-type-grid">

                        <article className="disaster-type-card">
                            <FaCloudRain />
                            <h3>Heavy Rainfall</h3>
                            <p>
                                Large amounts of rain can saturate soil and
                                make slopes unstable.
                            </p>
                        </article>

                        <article className="disaster-type-card">
                            <FaMountain />
                            <h3>Earthquakes</h3>
                            <p>
                                Ground shaking can destabilize slopes and
                                trigger landslides.
                            </p>
                        </article>

                        <article className="disaster-type-card">
                            <FaExclamationTriangle />
                            <h3>Unstable Slopes</h3>
                            <p>
                                Natural erosion and human activity can
                                increase slope instability.
                            </p>
                        </article>

                    </div>

                </section>


                <section className="disaster-info-section safety-section" id="before">

                    <div className="section-icon">
                        <FaShieldAlt />
                    </div>

                    <h2>Before a landslide</h2>

                    <ul className="safety-list">
                        <li>Learn whether your area is near a landslide-prone slope.</li>
                        <li>Pay attention to heavy rainfall warnings.</li>
                        <li>Know evacuation routes and safe locations.</li>
                        <li>Keep emergency supplies ready.</li>
                        <li>Watch for warning signs around your home.</li>
                        <li>Avoid unnecessary travel near unstable slopes.</li>
                    </ul>

                </section>


                <section className="disaster-info-section safety-section" id="during">

                    <div className="section-icon">
                        <FaExclamationTriangle />
                    </div>

                    <h2>During a landslide</h2>

                    <ul className="safety-list">
                        <li>Move away from the path of the landslide.</li>
                        <li>Follow evacuation instructions immediately.</li>
                        <li>Avoid river valleys and low-lying areas near slopes.</li>
                        <li>Stay away from unstable buildings and roads.</li>
                        <li>Do not return to the affected area without permission.</li>
                    </ul>

                </section>


                <section className="disaster-info-section safety-section" id="after">

                    <div className="section-icon">
                        <FaFirstAid />
                    </div>

                    <h2>After a landslide</h2>

                    <ul className="safety-list">
                        <li>Stay away from the affected area.</li>
                        <li>Watch for additional landslides.</li>
                        <li>Check for injuries and seek medical help.</li>
                        <li>Avoid damaged roads and bridges.</li>
                        <li>Report dangerous conditions to authorities.</li>
                        <li>Return home only when authorities say it is safe.</li>
                    </ul>

                </section>


                <section className="disaster-info-section" id="kit">

                    <h2>Emergency kit</h2>

                    <p>
                        Keep essential supplies ready in case evacuation
                        becomes necessary.
                    </p>

                    <div className="kit-grid">

                        <div className="kit-item">
                            <FaFirstAid />
                            <span>First-aid supplies</span>
                        </div>

                        <div className="kit-item">
                            <FaMountain />
                            <span>Emergency food</span>
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
                            If you notice signs of a possible landslide,
                            move away from the danger area and follow
                            official evacuation instructions.
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

export default Landslide;