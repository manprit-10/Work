import "./EmployeeBenefits.css";
import { Link , Routes, Route } from "react-router-dom";
import { Leaves } from "./components/leaves";
import { TaxBenefits } from "./components/taxbenefit";
import { MedicalBenefits } from "./components/medical";
import { Recognition } from "./components/recognition";

export default () => {
  return (
    <div>
      <div className="heading">
        <ul>
          <li>
            <Link to="/leaves">Leaves</Link>
          </li>
          <li>
            <Link to="/medicalbenefits">
              Medical Benefits
            </Link>
          </li>
          <li>
            <Link to="/recognition">Recognition</Link>
          </li>
          <li>
            <Link to="/taxbenefits">Tax Benefits</Link>
          </li>
        </ul>
      </div>
      <Routes>
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
      </Routes>
    </div>
  );
};
