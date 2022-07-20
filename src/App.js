import logo from "./logo.svg";
import "./App.css";
import Accordian from "./employee/benefits/Accordian";
import { Leaves } from "./employee/benefits/components/Leaves";

function App() {
  return (
    <div className="App">
      {/* <Accordian/> */}
      <Leaves />
    </div>
  );
}

export default App;
