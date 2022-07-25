import "./EmployeeBenefits.css";
import { Link, Routes, Route } from "react-router-dom";

import { useState } from "react";

export default () => {
  const [isActive, setIsActive] = useState("");
  const clickHandler = function (e: any) {
    setIsActive(e.target.textContent.toLowerCase().split(" ")[0]);
    console.log(isActive);
  };

  return (
    <div>
      <div className="heading">
        <ul>
          <li className={`link ${isActive === "leaves" && "active"}`}>
            <Link to="/employee/benefits/leaves" onClick={clickHandler}>
              Leaves
            </Link>
          </li>
          <li className={`link ${isActive === "medical" && "active"}`}>
            <Link
              to="/employee/benefits/medicalbenefits"
              onClick={clickHandler}
            >
              Medical Benefits
            </Link>
          </li>
          <li className={`link ${isActive === "recognition" && "active"}`}>
            <Link to="/employee/benefits/recognition" onClick={clickHandler}>
              Recognition
            </Link>
          </li>
          <li className={`link ${isActive === "tax" && "active"}`}>
            <Link to="/employee/benefits/taxbenefits" onClick={clickHandler}>
              Tax Benefits
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
