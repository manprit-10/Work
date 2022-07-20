import logo from "./logo.svg";
import "./App.css";
import Accordian from "./employee/benefits/Accordian";
import { Leaves } from "./employee/benefits/components/Leaves";
import { Medical } from "./employee/benefits/components/Medical";

function App() {
  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <Leaves /> */}
      <Medical />
    </div>
  );
}

export default App;
