// import "./EmployeeBenefits.css";
// import { Link, Routes, Route } from "react-router-dom";

// import { useState } from "react";

// export default () => {
//   const [isActive, setIsActive] = useState("");
//   const clickHandler = function (e: any) {
//     setIsActive(e.target.textContent.toLowerCase().split(" ")[0]);
//     console.log(isActive);
//   };

//   return (
//     <div>
//       <div className="heading">
//         <ul>
//           <li className={`link ${isActive === "leaves" && "activelink"}`}>
//             <Link to="/employee/benefits/leaves" onClick={clickHandler}>
//               Leaves
//             </Link>
//           </li>
//           <li className={`link ${isActive === "medical" && "activelink"}`}>
//             <Link
//               to="/employee/benefits/medicalbenefits"
//               onClick={clickHandler}
//             >
//               Medical Benefits
//             </Link>
//           </li>
//           <li className={`link ${isActive === "recognition" && "activelink"}`}>
//             <Link to="/employee/benefits/recognition" onClick={clickHandler}>
//               Recognition
//             </Link>
//           </li>
//           <li className={`link ${isActive === "tax" && "activelink"}`}>
//             <Link to="/employee/benefits/taxbenefits" onClick={clickHandler}>
//               Tax Benefits
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

import "./EmployeeBenefits.css";
import { Link, Routes, Route } from "react-router-dom";
import icon from "../../employee/Icon.svg";
import { useState } from "react";

export default () => {
  const [isActive, setIsActive] = useState("leaves");
  const clickHandler = function (e: any) {
    setIsActive(e.target.textContent.toLowerCase().split(" ")[0]);
    console.log(isActive);
  };

  return (
    <div>
      <div className="heading">
        <div className="route">
          <span>Employees</span>
          <img src={icon} />
          <span>Benefits</span>
        </div>
        <ul>
          <li className={`link ${isActive === "leaves" && "activeLink"}`}>
            <Link to="/employee/benefits/leaves" onClick={clickHandler}>
              Leaves
            </Link>
          </li>
          <li className={`link ${isActive === "medical" && "activeLink"}`}>
            <Link
              to="/employee/benefits/medicalbenefits"
              onClick={clickHandler}
            >
              Medical Benefits
            </Link>
          </li>
          <li className={`link ${isActive === "recognition" && "activeLink"}`}>
            <Link to="/employee/benefits/recognition" onClick={clickHandler}>
              Recognition
            </Link>
          </li>
          <li className={`link ${isActive === "tax" && "activeLink"}`}>
            <Link to="/employee/benefits/taxbenefits" onClick={clickHandler}>
              Tax Benefits
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
