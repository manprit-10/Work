import "./Accordian.css";
import { useState } from "react";

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

  return (
    <div className="wrapper">
      <div className="accordian">
        <div className="item">
          <div className="title">
            {/* <span>{select === index ? "-" : "+"}</span> */}
            <h2>{props.title}</h2>
          </div>
          {/* <div className={select === index ? "content show" : "content"}> */}
          <div className="content show">
            <hr></hr>
            <ul className="questions-list">{getContent(props.questions)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Accordian;
