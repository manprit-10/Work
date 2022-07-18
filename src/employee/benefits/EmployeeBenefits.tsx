import "./EmployeeBenefits.css";
import Accordian  from "./Accordian";

export default () => {
  return (
    <div>
      <div className="heading">
        <ul>
          <li>
            <a href="#">Leaves</a>
          </li>
          <li>
            <a href="#">Medical Benefits</a>
          </li>
          <li>
            <a href="#">Recognition</a>
          </li>
          <li>
            <a href="#">Tax Benefits</a>
          </li>
        </ul>
      </div>
      <Accordian />
    </div>
  );
};
