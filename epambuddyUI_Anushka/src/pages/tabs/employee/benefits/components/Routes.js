import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import { Leaves } from "./leaves";
import { MedicalBenefits } from "./medical";
import { Recognition } from "./recognition";
import { TaxBenefits } from "./taxbenefit";

export const MainRoutes = function () {
  return (
    <Routes>
      <Route path="/employee/benefits/leaves" element={<div className="accordian"><Leaves /></div>} />

      <Route
        path="/employee/benefits/medicalbenefits" element={<div className="accordian"><MedicalBenefits /></div>} />

      <Route path="/employee/benefits/recognition" element={<div className="accordian"><Recognition /></div>} />

      <Route path="/employee/benefits/taxbenefits" element={<div className="accordian"><TaxBenefits /></div>} />
    </Routes>
  );
};