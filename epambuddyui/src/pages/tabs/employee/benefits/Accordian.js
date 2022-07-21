import "./Accordian.css";

const Accordian = (props) => {
  const getContent = function (data) {
    return Object.entries(data).map(function (item) {
      return (
        <li key={item}>
          <p className="questions">
            {item[0]} : {item[1][item[0]]}
          </p>
          <p>A : {item[1]["A"]}</p>
        </li>
      );
    });
  };

  const clickHandler = function () {
    props.onClick(props.title);
  };
  return (
    <div className="wrapper" onClick={clickHandler}>
      <div className="accordian">
        <div className="item">
          <div className="title">
            <span>{props.isActive === props.title ? "-" : "+"}</span>
            <h2>{props.title}</h2>
          </div>
          <div
            className={
              props.isActive === props.title ? "content show" : "content"
            }
          >
            {/* <div className="content show"> */}
            <hr></hr>
            <ul className="questions-list">{getContent(props.questions)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
