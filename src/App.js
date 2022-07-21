import "./App.css";

import { EmployeeRoutes } from "./employee/benefits/components/EmployeeRoutes";
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Link to="/employee/benefits/leaves">Leaves</Link>
      <Link to="/employee/benefits/medical">Medical</Link>
      <EmployeeRoutes />
    </Router>
  );
}

export default App;
