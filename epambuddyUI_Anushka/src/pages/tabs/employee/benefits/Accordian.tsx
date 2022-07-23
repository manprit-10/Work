import "./Accordian.css";

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
              {accordionData.isActive === accordionData.title ? "-" : "+"}
            </span>
            <h2>{accordionData.title}</h2>
          </div>
          <div
            className={
              accordionData.isActive === accordionData.title
                ? "content show"
                : "content"
              // "content show"
            }
          >
            {/* <div className="content show"> */}
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

export default Accordian;
