import "./Accordian.css";
import { useState } from "react";

const Accordian = () => {
  const [select, setSelect] = useState(null);

  const toggle = (index) => {
    if (select === index) {
      return setSelect(null);
    }
    setSelect(index);
  };
  return (
    <div className="wrapper">
      <div className="accordian">
        {data.map((element, index) => (
          <div className="item">
            <div className="title" onClick={() => toggle(index)}>
              <span>{select === index ? "-" : "+"}</span>
              <h2>{element.question}</h2>
            </div>
            <div className={select === index ? "content show" : "content"}>
              {element.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    question: "Breavement leave",
    answer: `Q17 : Are Bereavement leaves carried forward to next year
          A : No carry forward to next calendar year
          Q18 : Can Bereavement leave be accumulated?
          A : Bereavement leave will not be accumulated or carried forward, if not utilized.
          Q19 : Can Bereavement leave be carried forwarded?
          A : Bereavement leave will not be accumulated or carried forward, if not utilized.
          Q20 : Can Bereavement leave be clubbed with other types of leave?
          A : Bereavement leaves can be clubbed with weekly offs/ Mandatory holidays/Optional holidays/ Open optional holiday/ Unused paid leave balance based on the time of the incident.
          Q21 : Can Bereavement leave be used later?
          A : Bereavement leave will not be accumulated or carried forward, if not utilized.`,
  },
  {
    id: 2,
    question: "Casual Leaves",
    answer: `Q37 : Can I carry forward Casual Leaves
    A : No, Casual leaves can not be carried forward
    Q38 : Casual Leave is not rolled over to the next year. Is it compensated in case of relocation/dismissal in the current year
    A : Yes, it is not rolled over to next year. Yes, it should be compensated in case of relocation/dismissal in the current year the result leads to negative balance only.
    Q46 : What is a Casual Leave
    A : The purpose of providing Casual Leaves (CL) is to accommodate any urgent/ unforeseen personal requirements as against EL being planned leaves.
    Q47 : Which types of employees are eligible to submit the CL request?
    A : All employees in India are eligible to submit CL requests, excluding Part Time employees`,
  },
  {
    id: 3,
    question: "Earned Leaves",
    answer: "Hello",
  },
  {
    id: 4,
    question: "Holiday Calendar",
    answer: "Hello",
  },
];

export default Accordian;
