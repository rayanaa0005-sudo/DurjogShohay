import { BrowserRouter, Routes, Route } from "react-router-dom";
import VolunteerRecruitment from "./pages/VolunteerRecruitment";
import Shelters from "./pages/Shelters";
import "./App.css";
function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VolunteerRecruitment />} />
        <Route path="/shelters" element={<Shelters />} />
        <Route path="/volunteer" element={<VolunteerRecruitment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;