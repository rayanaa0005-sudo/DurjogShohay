import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import {
    FaWater,
    FaExclamationTriangle,
    FaShieldAlt,
    FaFirstAid,
    FaHome,
    FaArrowLeft
} from "react-icons/fa";
import "../styles/DisasterInfo.css";

function Flood() {
    return (
        <div className="disaster-page">

            <NavBar />

            <header className="disaster-header">

                <div className="disaster-header-content">

                    <p className="disaster-small-title">
                        DISASTER INFORMATION
                    </p>

                    <h1>
                        <FaWater />
                        Flood
                    </h1>

                    <p className="disaster-introduction">
                        A flood occurs when water covers land that is normally
                        dry. Floods can happen because of heavy rainfall,
                        overflowing rivers, storm surges, or other causes.
                        Knowing what to do before, during, and after a flood
                        can help protect lives and property.
                    </p>

                </div>

            </header>


            <main className="disaster-container">

                <section className="quick-facts">

                    <h2>Flood: Quick Facts</h2>

                    <div className="facts-grid">

                        <div className="fact">
                            <span>Cause</span>
                            <strong>
                                Heavy rain, river overflow, storm surge
                            </strong>
                        </div>

                        <div className="fact">
                            <span>Main Risk</span>
                            <strong>
                                Drowning, injuries and property damage
                            </strong>
                        </div>

                        <div className="fact">
                            <span>Warning</span>
                            <strong>
                                Weather and flood warnings
                            </strong>
                        </div>

                        <div className="fact">
                            <span>Priority</span>
                            <strong>
                                Move to safer and higher ground
                            </strong>
                        </div>

                    </div>

                </section>


                <section className="disaster-contents">

                    <h2>Contents</h2>

                    <ol>
                        <li>
                            <a href="#what-is-flood">
                                What is a flood?
                            </a>
                        </li>

                        <li>
                            <a href="#causes">
                                Causes of floods
                            </a>
                        </li>

                        <li>
                            <a href="#types">
                                Types of floods
                            </a>
                        </li>

                        <li>
                            <a href="#before">
                                Before a flood
                            </a>
                        </li>

                        <li>
                            <a href="#during">
                                During a flood
                            </a>
                        </li>

                        <li>
                            <a href="#after">
                                After a flood
                            </a>
                        </li>

                        <li>
                            <a href="#emergency-kit">
                                Emergency kit
                            </a>
                        </li>
                    </ol>

                </section>


                <section
                    className="disaster-info-section"
                    id="what-is-flood"
                >

                    <h2>What is a flood?</h2>

                    <p>
                        A flood is an overflow of water that covers land
                        that is normally dry. Floods can develop slowly over
                        several days or happen very quickly, sometimes with
                        little warning.
                    </p>

                    <p>
                        Flooding can affect homes, roads, electricity,
                        communication systems, agriculture and access to
                        essential services. The level of danger depends on
                        the depth and speed of the water and the location
                        of the affected area.
                    </p>

                </section>


                <section
                    className="disaster-info-section"
                    id="causes"
                >

                    <h2>Causes of floods</h2>

                    <p>
                        Floods can occur for several different reasons.
                        Common causes include:
                    </p>

                    <ul>
                        <li>Heavy or prolonged rainfall</li>
                        <li>Rivers overflowing their banks</li>
                        <li>Storm surges caused by severe weather</li>
                        <li>Rapid melting of snow or ice</li>
                        <li>Poor drainage in urban areas</li>
                        <li>Dam or embankment failure</li>
                    </ul>

                </section>


                <section
                    className="disaster-info-section"
                    id="types"
                >

                    <h2>Types of floods</h2>

                    <div className="disaster-type-grid">

                        <article className="disaster-type-card">

                            <FaWater />

                            <h3>River Flood</h3>

                            <p>
                                Happens when a river receives more water
                                than it can contain and rises above its
                                banks.
                            </p>

                        </article>


                        <article className="disaster-type-card">

                            <FaExclamationTriangle />

                            <h3>Flash Flood</h3>

                            <p>
                                A rapidly developing flood that can occur
                                after intense rainfall and may provide
                                very little warning.
                            </p>

                        </article>


                        <article className="disaster-type-card">

                            <FaHome />

                            <h3>Urban Flood</h3>

                            <p>
                                Occurs when heavy rainfall overwhelms
                                drainage systems in towns and cities.
                            </p>

                        </article>

                    </div>

                </section>


                <section
                    className="disaster-info-section safety-section"
                    id="before"
                >

                    <div className="section-icon">
                        <FaShieldAlt />
                    </div>

                    <h2>Before a flood</h2>

                    <p>
                        Preparing before flooding occurs can reduce risks
                        and make evacuation easier.
                    </p>

                    <ul className="safety-list">

                        <li>
                            Monitor official weather and flood warnings.
                        </li>

                        <li>
                            Know the safest route to higher ground or a
                            designated shelter.
                        </li>

                        <li>
                            Keep important documents in a waterproof
                            container.
                        </li>

                        <li>
                            Store drinking water and essential food.
                        </li>

                        <li>
                            Keep medicines and a first-aid kit ready.
                        </li>

                        <li>
                            Charge phones and keep backup power available.
                        </li>

                        <li>
                            Move important belongings to a higher place if
                            flooding is expected.
                        </li>

                    </ul>

                </section>


                <section
                    className="disaster-info-section safety-section"
                    id="during"
                >

                    <div className="section-icon">
                        <FaExclamationTriangle />
                    </div>

                    <h2>During a flood</h2>

                    <p>
                        Your safety should be the priority during flooding.
                    </p>

                    <ul className="safety-list">

                        <li>
                            Move to higher ground when advised to evacuate.
                        </li>

                        <li>
                            Follow instructions from local authorities and
                            emergency services.
                        </li>

                        <li>
                            Never walk or drive through fast-moving floodwater.
                        </li>

                        <li>
                            Stay away from fallen electrical wires and
                            electrical equipment exposed to water.
                        </li>

                        <li>
                            Keep children and vulnerable family members away
                            from floodwater.
                        </li>

                        <li>
                            Avoid unnecessary travel through flooded areas.
                        </li>

                    </ul>

                </section>


                <section
                    className="disaster-info-section safety-section"
                    id="after"
                >

                    <div className="section-icon">
                        <FaFirstAid />
                    </div>

                    <h2>After a flood</h2>

                    <p>
                        Floodwater can remain dangerous even after the water
                        begins to disappear.
                    </p>

                    <ul className="safety-list">

                        <li>
                            Return home only when authorities say it is safe.
                        </li>

                        <li>
                            Avoid standing water because it may be
                            contaminated or hide hazards.
                        </li>

                        <li>
                            Do not use electrical equipment that has been
                            exposed to water until it has been checked.
                        </li>

                        <li>
                            Use safe drinking water and follow local health
                            guidance.
                        </li>

                        <li>
                            Seek medical help for injuries or signs of illness.
                        </li>

                        <li>
                            Report dangerous conditions to the appropriate
                            authorities.
                        </li>

                    </ul>

                </section>


                <section
                    className="disaster-info-section"
                    id="emergency-kit"
                >

                    <h2>Emergency kit</h2>

                    <p>
                        Consider keeping these essential items together in
                        an easily accessible emergency bag:
                    </p>

                    <div className="kit-grid">

                        <div className="kit-item">
                            <FaFirstAid />
                            <span>First-aid supplies</span>
                        </div>

                        <div className="kit-item">
                            <FaWater />
                            <span>Drinking water</span>
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
                            Follow instructions from local authorities
                            during an emergency. If you are in immediate
                            danger, contact the appropriate emergency
                            services in your area.
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

export default Flood;