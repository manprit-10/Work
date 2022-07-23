import "./EmployeeBenefits.css";
import { Link, Routes, Route } from "react-router-dom";

import { useState } from "react";

export default () => {
  const [isActive, setIsActive] = useState(null);

  return (
    <div>
      <div className="heading">
        <ul>
          <li className="link ">
            <Link to="/employee/benefits/leaves">Leaves</Link>
          </li>
          <li className="link">
            <Link to="/employee/benefits/medicalbenefits">
              Medical Benefits
            </Link>
          </li>
          <li className="link">
            <Link to="/employee/benefits/recognition">Recognition</Link>
          </li>
          <li className="link">
            <Link to="/employee/benefits/taxbenefits">Tax Benefits</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
