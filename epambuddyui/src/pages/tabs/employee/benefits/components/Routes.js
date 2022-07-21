import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import { Leaves } from "./leaves";
import { MedicalBenefits } from "./medical";
import { Recognition } from "./recognition";
import { TaxBenefits } from "./taxbenefit";

export const MainRoutes = function () {
  return (
    <Routes>
      <Route path="/employee/benefits/leaves" element={<Leaves />} />

      <Route
        path="/employee/benefits/medicalbenefits"
        element={<MedicalBenefits />}
      />

      <Route path="/employee/benefits/recognition" element={<Recognition />} />

      <Route path="/employee/benefits/taxbenefits" element={<TaxBenefits />} />
    </Routes>
  );
};
