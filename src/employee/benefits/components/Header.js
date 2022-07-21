import { Link } from "react-router-dom";
import "./Header.css";
export const Header = function () {
  return (
    <>
      <Link className="link" to="/employee/benefits/leaves">
        Leaves
      </Link>
      <Link className="link" to="/employee/benefits/medical">
        Medical
      </Link>
    </>
  );
};
