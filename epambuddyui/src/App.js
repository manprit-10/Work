import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import SearchResults from "./pages/search/SearchResults";
import EmployeeBenefits from "./pages/tabs/employee/benefits/EmployeeBenefits";
import { MainRoutes } from "./pages/tabs/employee/benefits/components/Routes";
import { Leaves } from "./pages/tabs/employee/benefits/components/leaves";
import { MedicalBenefits } from "./pages/tabs/employee/benefits/components/medical";
import { Recognition } from "./pages/tabs/employee/benefits/components/recognition";
import { TaxBenefits } from "./pages/tabs/employee/benefits/components/taxbenefit";

import "./App.css";
import "@epam/uui-components/styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search Results</Link>
            </li>
            <li>
              <Link to="/employee/benefits">Employee Benefits</Link>
            </li>
          </ul>
        </nav> */}
      </header>
      <Router>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/search" element={<SearchResults />} />

          <Route path="/employee/benefits" element={<EmployeeBenefits />}> </Route>
{/*           
          <Route path="/employee/benefits/leaves" element={<Leaves/>} />

          <Route path="/employee/benefits/medicalbenefits" element={<MedicalBenefits/>} />

          <Route path="/employee/benefits/recognition" element={<Recognition/>}/>

          <Route path="/employee/benefits/taxbenefits" element={<TaxBenefits />}/> */}

        </Routes>

          {/* <MainRoutes /> */}
      </Router>
    </div>
  );
}

export default App;
