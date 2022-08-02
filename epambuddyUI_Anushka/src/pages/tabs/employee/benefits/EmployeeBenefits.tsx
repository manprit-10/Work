<<<<<<< HEAD
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
=======
import "./EmployeeBenefits.css";
import { Link, Routes, Route } from "react-router-dom";

import { useState } from "react";

export default () => {
  const [isActive, setIsActive] = useState("");
>>>>>>> b20e0a18bcc52387efe78b4ce63d42e56f2bc930
  const clickHandler = function (e: any) {
    setIsActive(e.target.textContent.toLowerCase().split(" ")[0]);
    console.log(isActive);
  };

  return (
    <div>
      <div className="heading">
<<<<<<< HEAD
        <div className="route">
          <span>Employees</span>
          <img src={icon} />
          <span>Benefits</span>
        </div>
        <ul>
          <li className={`link ${isActive === "leaves" && "activeLink"}`}>
=======
        <ul>
          <li className={`link ${isActive === "leaves" && "active"}`}>
>>>>>>> b20e0a18bcc52387efe78b4ce63d42e56f2bc930
            <Link to="/employee/benefits/leaves" onClick={clickHandler}>
              Leaves
            </Link>
          </li>
<<<<<<< HEAD
          <li className={`link ${isActive === "medical" && "activeLink"}`}>
=======
          <li className={`link ${isActive === "medical" && "active"}`}>
>>>>>>> b20e0a18bcc52387efe78b4ce63d42e56f2bc930
            <Link
              to="/employee/benefits/medicalbenefits"
              onClick={clickHandler}
            >
              Medical Benefits
            </Link>
          </li>
<<<<<<< HEAD
          <li className={`link ${isActive === "recognition" && "activeLink"}`}>
=======
          <li className={`link ${isActive === "recognition" && "active"}`}>
>>>>>>> b20e0a18bcc52387efe78b4ce63d42e56f2bc930
            <Link to="/employee/benefits/recognition" onClick={clickHandler}>
              Recognition
            </Link>
          </li>
<<<<<<< HEAD
          <li className={`link ${isActive === "tax" && "activeLink"}`}>
=======
          <li className={`link ${isActive === "tax" && "active"}`}>
>>>>>>> b20e0a18bcc52387efe78b4ce63d42e56f2bc930
            <Link to="/employee/benefits/taxbenefits" onClick={clickHandler}>
              Tax Benefits
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
