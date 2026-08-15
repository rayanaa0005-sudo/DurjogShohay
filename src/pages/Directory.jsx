import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/Directory.css";

const Directory =() =>{
    const [selectedDistrict, setSelectedDistrict]= useState("");
    const [selectedArea, setSelectedArea]= useState("");


    const organizations = {
    Chandina: [
        {
            name: "Bangladesh Red Crescent Society",
            details: "Local Red Crescent presence providing humanitarian and disaster-response support in Chandina."
        },
        {
            name: "BRAC",
            details: "BRAC operates a health programme facility in Chandina and has experience supporting communities affected by disasters."
        }
    ],

    Feni: [
        {
            name: "Bangladesh Red Crescent Society",
            details: "Red Crescent teams and volunteers have provided humanitarian assistance to flood-affected families in Feni."
        },
        {
            name: "Islamic Relief Bangladesh",
            details: "Islamic Relief Bangladesh has carried out emergency response activities in Feni, including food, cash and hygiene assistance."
        }
    ]
};












    return (
        <div>

          <NavBar/>

            <div className="directory-page">

                 <h1>Organisations Directory</h1>

                 <p>Find Organisations Currently Working in Different areas</p>

                <div className="selection-section">
                    <label>Select District</label>

                    <select value = {selectedDistrict}  onChange={(e)=>   { setSelectedDistrict(e.target.value); setSelectedArea(""); }   }>

                        <option value="">Select a district</option>
                        <option value="Cumilla">Cumilla</option>

                    </select>

                   {/* <h1>{selectedDistrict}</h1> */}

                {selectedDistrict === "Cumilla" && (
                    <div className="selection-section">

                        <label>Select Area</label>

                        <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)} >
                        
                        <option value="">Select an area</option>
                        <option value="Chandina">Chandina</option>
                        <option value="Feni">Feni</option>
                    
                        </select>

                    </div>
                )}

                {selectedArea && (
                    <div className="organization-section">

                        <label> Organizations working in {selectedArea}</label>

                        {organizations[selectedArea].map((organization, index) => (
                         <div className="organization-card" key={index}>

                         <h3>{organization.name}</h3>

                         <p>{organization.details}</p>

                        </div>

                         ))}

                     </div>
                )}



                </div>
            </div>

        </div>
        
    

    )



};

export default Directory;