import Icon from "../Icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

type HomeItemProps = {
  employeeDetail: {
    id: number;
    categoryName: string;
    categories: string[];
    labels: string[];
  };
};

export default ({ employeeDetail }: HomeItemProps) => {
  const {labels = []} = employeeDetail;
  const [isActive, setIsActive] = useState(false);
  const [onHover, setHover] = useState(false);

  return (
    <div className="home-items" onClick={() => setIsActive(!isActive)} onMouseOver={() => setHover(true)} 
      onMouseOut={() => setHover(false)}
    >
      {/* <img src={Icon} alt="icon" /> */}
      <div style={{display: "flex", justifyContent:"space-between"}}><div>{employeeDetail.categoryName}</div>
      <div>
      {onHover && labels.length > 0 &&
              labels.map((label) => (
                <span style={{border: '1px solid darkgrey', borderRadius: '0.25rem', padding: '0.5rem', margin: '0 0.5rem'}}>{label}</span>)
              )}
      </div></div>

      {isActive && <hr />}
      {isActive &&
        employeeDetail.categories.map((data) => (
          <Link
            to={`/employee/benefits/${data.toLowerCase().split(" ").join("")}`}
<<<<<<< HEAD
            
=======
>>>>>>> b20e0a18bcc52387efe78b4ce63d42e56f2bc930
          >
            <div className="category">{data}</div>
          </Link>
        ))}
<<<<<<< HEAD
        
    </div>
  );
};
=======
    </div>
  );
};
>>>>>>> b20e0a18bcc52387efe78b4ce63d42e56f2bc930
