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
            details: "Local Red Crescent presence providing humanitarian and disaster-response support in Chandina.",
            contact: "Contact: 01832838126"
        },
        {
            name: "BRAC",
            details: "BRAC operates a health programme facility in Chandina and has experience supporting communities affected by disasters.",
            contact: "Contact: 01832838126"
        }
    ],

    Feni: [
        {
            name: "Bangladesh Red Crescent Society",
            details: "Red Crescent teams and volunteers have provided humanitarian assistance to flood-affected families in Feni.",
            contact: "Contact: 01832838126"
        },
        {
            name: "Islamic Relief Bangladesh",
            details: "Islamic Relief Bangladesh has carried out emergency response activities in Feni, including food, cash and hygiene assistance.",
            contact: "Contact: 01832838126"
        }
    ],
Halishahar: [
        {
        name: "Bangladesh Scouts",
        details: "Bangladesh Scouts supports community activities and volunteer-based emergency response in vulnerable areas.",
        contact: "Contact: 01832838126"
        },
        {
        name: "Bidyanondo Foundation",
        details: "Bidyanondo Foundation provides humanitarian assistance and community support to people affected by emergencies.",
        contact: "Contact: 01832838126"
        }
    ],

Chhagalnaiya: [
        {
        name: "Islamic Relief Bangladesh",
        details: "Islamic Relief Bangladesh provides humanitarian assistance including emergency food, cash and hygiene support to vulnerable communities.",
        contact: "Contact: 01832838126"
        },
        {
        name: "CARE Bangladesh",
        details: "CARE Bangladesh works with vulnerable communities through humanitarian response and disaster preparedness programmes.",
        contact: "Contact: 01832838126"
        }
    ]
};












    return (
        <div>

          <NavBar/>

            <div className="directory-page">

                 <h1>Find Organisations Currently Working in Different areas</h1>


                <div className="selection-section">
                    <label>Select District</label>

                    <select value = {selectedDistrict}  onChange={(e)=>   { setSelectedDistrict(e.target.value); setSelectedArea(""); }   }>

                        <option value="">Select a district</option>
                        <option value="Cumilla">Cumilla</option>
                        <option value="Chittagong">Chittagong</option>

                    </select>

                   {/* <h1>{selectedDistrict}</h1> */}

                {selectedDistrict && (
                    <div className="selection-section">

                        <label>Select Area</label>

                        <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)} >
                        
                        <option value="">Select an area</option>

                        {selectedDistrict === "Cumilla" ? (
                    <>
                        <option value="Chandina">Chandina</option>
                        <option value="Feni">Feni</option>
                    </>
                    ) : (
                     <>
                    <option value="Halishahar">Halishahar</option>
                    <option value="Chhagalnaiya">Chhagalnaiya</option>
                     </>
            )}
                    
                        </select>

                    </div>
                )}

                {selectedArea && (
                    <div className="organization-section">

                        <label> Organizations working in {selectedArea}</label>

                        {organizations[selectedArea].map((organization, index) => (
                         <div className="organization-card" key={index} >

                         <h3>{organization.name}</h3>

                         <p>{organization.details}</p>
                         <p>{organization.contact}</p>

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