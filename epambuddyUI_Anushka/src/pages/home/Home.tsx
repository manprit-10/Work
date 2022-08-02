import { useEffect, useState } from "react";
import API from "../../api/API";
import "./Home.css";
import HomeItem from "./components/HomeItem";
export default () => {

  const [categories, setCategories] = useState([])
  const fetchCategories = () => {

    API.get('categories?questionType=1').then((res) => {
      // console.log(res)
      // setCategories(Array(res));
    })
  }

  useEffect(() => {
    fetchCategories()
  }, [])
  const employee = [
    {
      id:1,
      categoryName:"Admin and Facilities",
      categories:["Id cards","Admin and Facilities at Pune","Admin and Facilities at Bangaluru"],
      labels: ["Admin", "Facilities"]
    },
    {
      id:2,
      categoryName:"Benefits",
      categories:["Leaves","Medical Benefits","Recognition","Tax Benefits"],
      labels: ["Leaves", "Medical", "Recognition", "Taxes"]
    },
    {
      id:3,
      categoryName:"Compensation",
      categories:["Leaves","Medical Benefits","Recognition","Tax Benefits"],
      labels: []

    },
    {
      id:4,
      categoryName:"COT and EPAM clubs",
      categories:["Leaves","Medical Benefits","Recognition","Tax Benefits"],
      labels: []
    },
    {
      id:5,
      categoryName:"Employee Grevience Redressal",
      categories:["Leaves","Medical Benefits","Recognition","Tax Benefits"],
      labels: []
    },
    {
      id:6,
      categoryName:"Learning and Development",
      categories:["Leaves","Medical Benefits","Recognition","Tax Benefits"],
      labels: []
    },
    {
      id:7,
      categoryName:"Payroll",
      categories:["Leaves","Medical Benefits","Recognition","Tax Benefits"],
      labels: []
    },
  ]
  console.log(employee[0])
  return <div className="home">
    <div className="top-content">You can also browse the topics below to find what you are looking for.</div>
    {
      employee.map((emp)=> <HomeItem key={emp.id} employeeDetail={emp}/>)
    }
    {/* <div className="home-items"><img src={Icon} alt="icon"/>Admin and Facilities</div>
    <div className="home-items"><img src={Icon} alt="icon"/>Benefits</div>
    <div className="home-items"><img src={Icon} alt="icon"/>Compensation</div>
    <div className="home-items"><img src={Icon} alt="icon"/>COT and EPAM Clubs</div>
    <div className="home-items"><img src={Icon} alt="icon"/>Employee Grevience Redressal</div>
    <div className="home-items"><img src={Icon} alt="icon"/>Learning and Development</div>
    <div className="home-items"><img src={Icon} alt="icon"/>Payroll</div>
    <div className="home-items"><img src={Icon} alt="icon"/>Performance Management System</div>
    <div className="home-items"><img src={Icon} alt="icon"/>Policy and Process</div>
    <div className="home-items"><img src={Icon} alt="icon"/>Staffing</div> */}
  </div>
}
