import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import {
    FaFire,
    FaExclamationTriangle,
    FaShieldAlt,
    FaFirstAid,
    FaBolt,
    FaArrowLeft
} from "react-icons/fa";
import "../styles/DisasterInfo.css";

function Fire() {
    return (
        <div className="disaster-page">

            <NavBar />

            <header className="disaster-header">

                <div className="disaster-header-content">

                    <p className="disaster-small-title">
                        DISASTER INFORMATION
                    </p>

                    <h1>
                        <FaFire />
                        Fire
                    </h1>

                    <p className="disaster-introduction">
                        A fire is a rapid chemical reaction that produces
                        heat and light. Fires can spread quickly and cause
                        serious injuries, property damage and loss of life.
                    </p>

                </div>

            </header>


            <main className="disaster-container">

                <section className="quick-facts">

                    <h2>Fire: Quick Facts</h2>

                    <div className="facts-grid">

                        <div className="fact">
                            <span>Cause</span>
                            <strong>Heat, fuel and oxygen</strong>
                        </div>

                        <div className="fact">
                            <span>Main Risk</span>
                            <strong>Burns, smoke inhalation and property damage</strong>
                        </div>

                        <div className="fact">
                            <span>Warning</span>
                            <strong>Smoke, flames and fire alarms</strong>
                        </div>

                        <div className="fact">
                            <span>Priority</span>
                            <strong>Evacuate quickly and safely</strong>
                        </div>

                    </div>

                </section>


                <section className="disaster-contents">

                    <h2>Contents</h2>

                    <ol>
                        <li><a href="#what-is">What is a fire?</a></li>
                        <li><a href="#types">Types of fires</a></li>
                        <li><a href="#before">Fire prevention</a></li>
                        <li><a href="#during">During a fire</a></li>
                        <li><a href="#after">After a fire</a></li>
                        <li><a href="#kit">Emergency kit</a></li>
                    </ol>

                </section>


                <section className="disaster-info-section" id="what-is">

                    <h2>What is a fire?</h2>

                    <p>
                        Fire is a chemical reaction that releases heat and
                        light. When uncontrolled, fire can spread rapidly
                        through buildings, vegetation and other materials.
                    </p>

                    <p>
                        Smoke produced by fires can also be dangerous.
                        Getting out of the affected area quickly is an
                        important part of fire safety.
                    </p>

                </section>


                <section className="disaster-info-section" id="types">

                    <h2>Types of fires</h2>

                    <div className="disaster-type-grid">

                        <article className="disaster-type-card">
                            <FaBolt />
                            <h3>Electrical Fire</h3>
                            <p>
                                Can occur because of damaged wiring,
                                overloaded circuits or electrical equipment.
                            </p>
                        </article>

                        <article className="disaster-type-card">
                            <FaFire />
                            <h3>Kitchen Fire</h3>
                            <p>
                                Fires can start from cooking equipment,
                                oil and other kitchen materials.
                            </p>
                        </article>

                        <article className="disaster-type-card">
                            <FaExclamationTriangle />
                            <h3>Structural Fire</h3>
                            <p>
                                A fire inside a building can spread through
                                rooms and structural materials.
                            </p>
                        </article>

                    </div>

                </section>


                <section className="disaster-info-section safety-section" id="before">

                    <div className="section-icon">
                        <FaShieldAlt />
                    </div>

                    <h2>Fire prevention</h2>

                    <ul className="safety-list">
                        <li>Never leave cooking unattended.</li>
                        <li>Keep flammable materials away from heat.</li>
                        <li>Do not overload electrical outlets.</li>
                        <li>Check electrical wires for damage.</li>
                        <li>Keep fire extinguishers accessible.</li>
                        <li>Know at least two ways to leave your building.</li>
                    </ul>

                </section>


                <section className="disaster-info-section safety-section" id="during">

                    <div className="section-icon">
                        <FaExclamationTriangle />
                    </div>

                    <h2>During a fire</h2>

                    <ul className="safety-list">
                        <li>Leave the building immediately.</li>
                        <li>Use stairs instead of elevators.</li>
                        <li>Stay low if there is smoke.</li>
                        <li>Do not go back inside for belongings.</li>
                        <li>Close doors behind you if possible.</li>
                        <li>Call the appropriate emergency services.</li>
                    </ul>

                </section>


                <section className="disaster-info-section safety-section" id="after">

                    <div className="section-icon">
                        <FaFirstAid />
                    </div>

                    <h2>After a fire</h2>

                    <ul className="safety-list">
                        <li>Do not return until authorities say it is safe.</li>
                        <li>Seek medical help for burns or smoke exposure.</li>
                        <li>Avoid damaged electrical systems.</li>
                        <li>Do not use damaged appliances.</li>
                        <li>Report dangerous conditions.</li>
                        <li>Follow instructions from emergency authorities.</li>
                    </ul>

                </section>


                <section className="disaster-info-section" id="kit">

                    <h2>Emergency kit</h2>

                    <p>
                        Keep important emergency supplies somewhere that
                        can be reached easily.
                    </p>

                    <div className="kit-grid">

                        <div className="kit-item">
                            <FaFirstAid />
                            <span>First-aid supplies</span>
                        </div>

                        <div className="kit-item">
                            <FaShieldAlt />
                            <span>Emergency documents</span>
                        </div>

                        <div className="kit-item">
                            <FaFire />
                            <span>Fire extinguisher</span>
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
                            If a fire occurs, leave the building quickly and
                            never put yourself at risk trying to save property.
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

export default Fire;