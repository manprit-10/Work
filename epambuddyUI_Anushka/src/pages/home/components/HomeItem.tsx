import Icon from "../Icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
type HomeItemProps = {
  employeeDetail: {
    id: number;
    categoryName: string;
    categories: string[];
  };
};
export default ({ employeeDetail }: HomeItemProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="home-items" onClick={() => setIsActive(!isActive)}>
      <img src={Icon} alt="icon" />
      {employeeDetail.categoryName}
      {isActive && <hr />}
      {isActive &&
        employeeDetail.categories.map((data) => (
          <Link
            to={`/employee/benefits/${data.toLowerCase().split(" ").join("")}`}
          >
            <div className="category">{data}</div>
          </Link>
        ))}
    </div>
  );
};
