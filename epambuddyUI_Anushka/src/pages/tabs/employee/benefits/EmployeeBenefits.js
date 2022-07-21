import "./EmployeeBenefits.css";
import { Link, Routes, Route } from "react-router-dom";
import { Leaves } from "./components/leaves";
import { TaxBenefits } from "./components/taxbenefit";
import { MedicalBenefits } from "./components/medical";
import { Recognition } from "./components/recognition";
import { useState } from "react";

export default () => {
  const [isActive, setIsActive] = useState(null);
  const clickHandler = function (e) {
    console.log(e.target.closest(".link"));
    e.target.closest(".link").classList.toggle("active");
  };
  return (
    <div>
      <div className="heading">
        <ul>
          <li className="link " onClick={clickHandler}>
            <Link to="/employee/benefits/leaves">Leaves</Link>
          </li>
          <li className="link" onClick={clickHandler}>
            <Link to="/employee/benefits/medicalbenefits">
              Medical Benefits
            </Link>
          </li>
          <li className="link" onClick={clickHandler}>
            <Link to="/employee/benefits/recognition">Recognition</Link>
          </li>
          <li className="link" onClick={clickHandler}>
            <Link to="/employee/benefits/taxbenefits">Tax Benefits</Link>
          </li>
        </ul>
      </div>
      {/* <Routes>
        <Route path="/employee/benefits/leaves" element={<Leaves />} />

        <Route
          path="/employee/benefits/medicalbenefits"
          element={<MedicalBenefits />}
        />

        <Route
          path="/employee/benefits/recognition"
          element={<Recognition />}
        />

        <Route
          path="/employee/benefits/taxbenefits"
          element={<TaxBenefits />}
        />
      </Routes> */}
    </div>
  );
};

{
  /* <NavLink
              to="/employee/benefits/leaves"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              Leaves
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/employee/benefits/medicalbenefits"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              Medical Benefits
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/employee/benefits/recognition"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              Recognition
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/employee/benefits/taxbenefits"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              Tax Benefits
            </NavLink> */
}
