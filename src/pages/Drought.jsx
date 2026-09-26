import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import {
    FaSeedling,
    FaExclamationTriangle,
    FaShieldAlt,
    FaFirstAid,
    FaWater,
    FaArrowLeft
} from "react-icons/fa";
import "../styles/DisasterInfo.css";

function Drought() {
    return (
        <div className="disaster-page">

            <NavBar />

            <header className="disaster-header">

                <div className="disaster-header-content">

                    <p className="disaster-small-title">
                        DISASTER INFORMATION
                    </p>

                    <h1>
                        <FaSeedling />
                        Drought
                    </h1>

                    <p className="disaster-introduction">
                        A drought is a prolonged period of unusually low
                        rainfall that causes water shortages. Droughts can
                        affect people, agriculture, animals and ecosystems.
                    </p>

                </div>

            </header>


            <main className="disaster-container">

                <section className="quick-facts">

                    <h2>Drought: Quick Facts</h2>

                    <div className="facts-grid">

                        <div className="fact">
                            <span>Main Cause</span>
                            <strong>Long periods of low rainfall</strong>
                        </div>

                        <div className="fact">
                            <span>Main Risk</span>
                            <strong>Water shortage and crop failure</strong>
                        </div>

                        <div className="fact">
                            <span>Warning</span>
                            <strong>Declining water supplies and dry conditions</strong>
                        </div>

                        <div className="fact">
                            <span>Priority</span>
                            <strong>Conserve and protect available water</strong>
                        </div>

                    </div>

                </section>


                <section className="disaster-contents">

                    <h2>Contents</h2>

                    <ol>
                        <li><a href="#what-is">What is a drought?</a></li>
                        <li><a href="#effects">Effects of drought</a></li>
                        <li><a href="#types">Areas affected by drought</a></li>
                        <li><a href="#before">Preparing for drought</a></li>
                        <li><a href="#during">During a drought</a></li>
                        <li><a href="#after">After a drought</a></li>
                        <li><a href="#kit">Emergency kit</a></li>
                    </ol>

                </section>


                <section className="disaster-info-section" id="what-is">

                    <h2>What is a drought?</h2>

                    <p>
                        A drought is a period when an area receives less
                        precipitation than normal for an extended period.
                        It can result in reduced water availability for
                        people, agriculture and ecosystems.
                    </p>

                    <p>
                        Droughts can develop gradually and may continue for
                        months or longer depending on weather and water
                        conditions.
                    </p>

                </section>


                <section className="disaster-info-section" id="effects">

                    <h2>Effects of drought</h2>

                    <ul>
                        <li>Reduced availability of drinking water.</li>
                        <li>Crop and agricultural losses.</li>
                        <li>Reduced water for livestock.</li>
                        <li>Damage to ecosystems and vegetation.</li>
                        <li>Increased risk of wildfires in dry conditions.</li>
                    </ul>

                </section>


                <section className="disaster-info-section" id="types">

                    <h2>Areas affected by drought</h2>

                    <div className="disaster-type-grid">

                        <article className="disaster-type-card">
                            <FaWater />
                            <h3>Water Supply</h3>
                            <p>
                                Rivers, reservoirs and groundwater supplies
                                may decrease.
                            </p>
                        </article>

                        <article className="disaster-type-card">
                            <FaSeedling />
                            <h3>Agriculture</h3>
                            <p>
                                Crops and farmland may be affected by
                                insufficient water.
                            </p>
                        </article>

                        <article className="disaster-type-card">
                            <FaExclamationTriangle />
                            <h3>Environment</h3>
                            <p>
                                Plants, animals and ecosystems can experience
                                increased stress.
                            </p>
                        </article>

                    </div>

                </section>


                <section className="disaster-info-section safety-section" id="before">

                    <div className="section-icon">
                        <FaShieldAlt />
                    </div>

                    <h2>Preparing for drought</h2>

                    <ul className="safety-list">
                        <li>Store a safe supply of drinking water.</li>
                        <li>Repair leaking taps and pipes.</li>
                        <li>Use water efficiently.</li>
                        <li>Follow local water-use restrictions.</li>
                        <li>Prepare alternative water sources where appropriate.</li>
                        <li>Protect important plants and livestock from extreme dryness.</li>
                    </ul>

                </section>


                <section className="disaster-info-section safety-section" id="during">

                    <div className="section-icon">
                        <FaExclamationTriangle />
                    </div>

                    <h2>During a drought</h2>

                    <ul className="safety-list">
                        <li>Conserve water whenever possible.</li>
                        <li>Prioritize drinking water and essential needs.</li>
                        <li>Follow official water-use guidance.</li>
                        <li>Avoid unnecessary water consumption.</li>
                        <li>Monitor local water supply information.</li>
                    </ul>

                </section>


                <section className="disaster-info-section safety-section" id="after">

                    <div className="section-icon">
                        <FaFirstAid />
                    </div>

                    <h2>After a drought</h2>

                    <ul className="safety-list">
                        <li>Continue using water responsibly.</li>
                        <li>Check water sources for safety.</li>
                        <li>Assess damage to crops and property.</li>
                        <li>Restore vegetation where appropriate.</li>
                        <li>Follow guidance about returning to normal water use.</li>
                    </ul>

                </section>


                <section className="disaster-info-section" id="kit">

                    <h2>Emergency kit</h2>

                    <p>
                        Keep essential supplies available during periods
                        of water shortage.
                    </p>

                    <div className="kit-grid">

                        <div className="kit-item">
                            <FaWater />
                            <span>Drinking water</span>
                        </div>

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
                            <span>Emergency flashlight</span>
                        </div>

                    </div>

                </section>


                <section className="disaster-emergency">

                    <FaExclamationTriangle />

                    <div>
                        <h2>Remember</h2>

                        <p>
                            Water is a limited resource during drought.
                            Follow local guidance and conserve water whenever
                            possible.
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

export default Drought;