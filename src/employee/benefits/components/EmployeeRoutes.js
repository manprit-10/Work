import { Routes, Route, Link } from "react-router-dom";
import { Leaves } from "./Leaves";
import { Medical } from "./Medical";

export const EmployeeRoutes = function () {
  return (
    <Routes>
      <Route path="/employee/benefits/leaves" element={<Leaves />} />
      <Route path="/employee/benefits/medical" element={<Medical />} />
    </Routes>
  );
};
