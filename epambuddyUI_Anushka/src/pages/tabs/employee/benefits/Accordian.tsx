import "./Accordian.css";
<<<<<<< HEAD
import Icon from "../Icon.svg";
=======
>>>>>>> b20e0a18bcc52387efe78b4ce63d42e56f2bc930

type AccordianProps = {
  accordionData: {
    title: string;
    questions: Object;
    onClick: Function;
    isActive: string;
  };
};

const Accordian = ({ accordionData }: AccordianProps) => {
  const getContent = function (data: Object) {
    return Object.entries(data).map(function (item) {
      return (
        <li key={item[0]}>
          <p className="questions">
            {item[0]} : {item[1][item[0]]}
          </p>
          <p>A : {item[1]["A"]}</p>
        </li>
      );
    });
  };

  const clickHandler = function () {
    accordionData.onClick(accordionData.title);
  };
  return (
    <div className="wrap" onClick={clickHandler}>
      <div className="accordian">
        <div className="item">
          <div className="title">
            <span>
<<<<<<< HEAD
              {accordionData.isActive === accordionData.title ? <img src={Icon} alt="icon" /> : <img src={Icon} alt="icon" />}
            </span>
            <p>{accordionData.title}</p>
=======
              {accordionData.isActive === accordionData.title ? "-" : "+"}
            </span>
            <h2>{accordionData.title}</h2>
>>>>>>> b20e0a18bcc52387efe78b4ce63d42e56f2bc930
          </div>
          <div
            className={
              accordionData.isActive === accordionData.title
                ? "content show"
                : "content"
<<<<<<< HEAD
            }
          >
            
=======
              // "content show"
            }
          >
            {/* <div className="content show"> */}
>>>>>>> b20e0a18bcc52387efe78b4ce63d42e56f2bc930
            <hr></hr>
            <ul className="questions-list">
              {getContent(accordionData.questions)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Accordian;
=======
export default Accordian;
>>>>>>> b20e0a18bcc52387efe78b4ce63d42e56f2bc930
