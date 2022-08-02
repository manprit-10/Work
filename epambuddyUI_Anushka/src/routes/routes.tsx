import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import { Leaves } from "../pages/tabs/employee/benefits/components/leaves";
import { MedicalBenefits } from "../pages/tabs/employee/benefits/components/medical";
import { Recognition } from "../pages/tabs/employee/benefits/components/recognition";
import { TaxBenefits } from "../pages/tabs/employee/benefits/components/taxbenefit";

export const MainRoutes = function () {
  return (
    <Routes>
      <Route
        path="/employee/benefits/leaves"
        element={
          <div className="accordians">
            <Leaves />
          </div>
        }
      />

      <Route
        path="/employee/benefits/medicalbenefits"
        element={
          <div className="accordians">
            <MedicalBenefits />
          </div>
        }
      />

      <Route
        path="/employee/benefits/recognition"
        element={
          <div className="accordians">
            <Recognition />
          </div>
        }
      />

      <Route
        path="/employee/benefits/taxbenefits"
        element={
          <div className="accordians">
            <TaxBenefits />
          </div>
        }
      />
    </Routes>
  );
};